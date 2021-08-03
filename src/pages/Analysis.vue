<template>
    <!-- <h1>Analysis Page</h1> -->
    <select v-model="formation">
        <option disabled value="">Please select a formation</option>
        <option v-for="option in formationOptions" :value="option.value" :key="option.text">
            {{option.text}}
        </option>
    </select>
    <base-ground>
        <h2>Inside the football field</h2>
        <!-- <base-player v-for="player in homeTeam"
        :key="player.key"
        :name="player.name"
        :number="player.number"
        ></base-player> -->
        <formation :home=true :squad="homeTeam" :formation="formation"></formation>
        <formation :home=false :squad="awayTeam" :formation="formation"></formation>
        </base-ground>
       
        
    <!-- <body>
        
        <h2>Inside the football</h2>
    </body> -->
</template>

<script>
import { CDM, CF, CM, Defender, Forward, GK, GoalKeeper, LB, LCB, LW, Midfielder, RB, RCB, RW } from '../store/constants/player-position'
import { F_4231, F_433, F_442 } from '../store/constants/formations';
import BaseGround from '../components/ui/BaseGround.vue';
// import BasePlayer from '../components/ui/BasePlayer.vue';
import Formation from '../components/Formation.vue';
export default {
    components: { BaseGround, Formation },
    data() {
        return {
            formationOptions: [
                {text: F_4231, value: F_4231},
                {text: F_433, value: F_433},
                {text: F_442, value: F_442}
            ],
            formation: '',
            home: [
                {
                    name: "Hugo Loris",
                    number: 1,
                    type: GoalKeeper,
                    position: GK,
                },
                {
                    name: "Sergio Regulión",
                    number: 3,
                    type: Defender,
                    position: LB,
                },
                {
                    name: "Joe Rodon",
                    number: 4,
                    type: Defender,
                    position: LCB,
                },
                {
                    name: "Japhet Tanganga",
                    number: 25,
                    type: Defender,
                    position: RCB,
                },
                {
                    name: "Serge Aurier",
                    number: 24,
                    type: Defender,
                    position: RB,
                },
                {
                    name: "Pierre-Emile Højbjerg",
                    number: 5,
                    type: Midfielder,
                    position: CDM,
                },
                {
                    name: "Tanguy Ndombele",
                    number: 28,
                    type: Midfielder,
                    position: CM,
                },
                {
                    name: "Giovani Lo Celso",
                    number: 18,
                    type: Midfielder,
                    position: CM,
                },
                {
                    name: "Harry Kane",
                    number: 1,
                    type: Forward,
                    position: CF,
                },
                {
                    name: "Son Heung-Min",
                    number: 7,
                    type: Forward,
                    position: LW,
                },
                {
                    name: "Steven Bergwijn",
                    number: 23,
                    type: Forward,
                    position: RW,
                },
            ],
            away: [
                {
                    name: "Hugo Loris",
                    number: 1,
                    type: GoalKeeper,
                    position: GK,
                },
                {
                    name: "Sergio Regulión",
                    number: 3,
                    type: Defender,
                    position: LB,
                },
                {
                    name: "Joe Rodon",
                    number: 4,
                    type: Defender,
                    position: LCB,
                },
                {
                    name: "Japhet Tanganga",
                    number: 25,
                    type: Defender,
                    position: RCB,
                },
                {
                    name: "Serge Aurier",
                    number: 24,
                    type: Defender,
                    position: RB,
                },
                {
                    name: "Pierre-Emile Højbjerg",
                    number: 5,
                    type: Midfielder,
                    position: CDM,
                },
                {
                    name: "Tanguy Ndombele",
                    number: 28,
                    type: Midfielder,
                    position: CM,
                },
                {
                    name: "Giovani Lo Celso",
                    number: 18,
                    type: Midfielder,
                    position: CM,
                },
                {
                    name: "Harry Kane",
                    number: 1,
                    type: Forward,
                    position: CF,
                },
                {
                    name: "Son Heung-Min",
                    number: 7,
                    type: Forward,
                    position: LW,
                },
                {
                    name: "Steven Bergwijn",
                    number: 23,
                    type: Forward,
                    position: RW,
                },
            ]
        }
    },
    computed: {
        homeTeam() {
            return this.home.map((player) => {
                player.key = `${player.number}-${player.name}`
                return player;
            });

        },
        awayTeam() {
            return this.away.map((player) => {
                player.key = `${player.number}-${player.name}`
                return player;
            });
        }
    }
}
</script>

