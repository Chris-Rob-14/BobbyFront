<template>
    <div>
        <hr>
            <div>
                <p>{{ veto.name + ' - ' + veto.city}}</p>
                <p>{{ veto.address + ' - ' + veto.zip_code }}</p>
            </div>
                <hr>
            <div>
                <p>Rendez-vous disponible : {{  this.date.toLocaleDateString('fr') }}</p>
                <div v-for="key in Object.keys(availableRdvs)">
                <div v-if="availableRdvs[key]">
                    <button
                        @click="registerRdv(key)"
                        id="{{ key }}" 
                    >
                        {{ key }}
                    </button>
                    
                    <div v-if="isClicked[key] == true">
                        <form @submit.prevent="createRdv(key)">
                        <label for="motiv">Raison:</label>
                            <input v-model="reason" type="text" name="motiv" id="motiv" required>
                            <button type="submit">prendre le rendez-vous</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        <hr>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
axios.defaults.withCredentials = true;

export default defineComponent({
    props: {
        veto: {
            type: Object
        },
    },
    data() {
        return {
            date: new Date(),
            reason: '',
            rdvs: [],
            isClicked: [],
            availableRdvs: {
                '08:00': true,
                '09:00': true,
                '10:00': true,
                '11:00': true,
                '12:00': true,
                '14:00': true,
                '15:00': true,
                '16:00': true,
                '17:00': true
            }
        }
    },
    async mounted() {
        await this.getVeterinayRdvsForDate();
    },
    methods: {
        async createRdv(key: any) {
            try {
                // Diviser la chaîne en composants d'heure et de minute
                let [hours, minutes] = key.split(':');

                // Convertir les composants en nombres entiers
                hours = parseInt(hours, 10);
                minutes = parseInt(minutes, 10);

                // Créer une nouvelle instance de Date à partir de this.date
                let dateSart = this.date;

                // Utiliser setHours et setMinutes pour ajuster l'heure
                dateSart.setHours(hours).toLocaleString('fr');
                dateSart.setMinutes(0);
                dateSart.setSeconds(0);

                console.log(dateSart);

                let body = {
                    subject: this.reason,
                    date_start: dateSart,
                    date_end: dateSart,
                    animal_id: this.$route.params.id,
                    veterinary_id: this.veto.id
                }

                console.log(body);

                const response = await axios.post('http://localhost:3030/rdv/create',body, {
                    withCredentials: true,
                });

                console.log(response);

                if (response.status === 201) this.$router.push({
                    name: 'ProfilAnimal'
                });

            } catch(error) {
                console.log(error);
            }
        }
        ,async registerRdv(key) {
            this.isClicked[key] = true;
        },
        async getVeterinayRdvsForDate() {

            const year = this.date.getFullYear();
            const month = (this.date.getMonth() + 1).toString().padStart(2, '0');
            const day = this.date.getDate().toString().padStart(2, '0');

            const formattedDate = `${year}-${month}-${day}`;

            let url = 'http://localhost:3030/veterinaries/rdv/' + this.veto.id + '/' + formattedDate;

            const response = await axios.get(url,
            {
                withCredentials: true,
            })

            this.rdvs = response.data;

            this.rdvs.forEach(rdv => {
                
                let date = new Date(rdv.date_start);

                // Obtenez les heures et les minutes
                const heures = date.getHours();
                const minutes = date.getMinutes();

                // Formatez les heures et les minutes avec deux chiffres
                const heuresFormat = heures < 10 ? `0${heures}` : heures;
                const minutesFormat = minutes < 10 ? `0${minutes}` : minutes;

                // Concaténez les heures et les minutes au format "HH:MM"
                const heureMinuteFormat = `${heuresFormat}:${minutesFormat}`;

                for (var key in this.availableRdvs) {
                    if (key == heureMinuteFormat) this.availableRdvs[heureMinuteFormat] = false;
                }
            });
        }
    }
});

</script>