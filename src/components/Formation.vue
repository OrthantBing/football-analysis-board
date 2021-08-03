<template>
    <base-player v-for="player in team"
        :key="player.key"
        :name="player.name"
        :number="player.number"
        :basePosition="player.basePosition"
    ></base-player>
</template>

<script>
import { F_4231, F_442 } from '../store/constants/formations';
import {  } from '../store/constants/player-position';
import BasePlayer from './ui/BasePlayer.vue';
export default {
    data(){
        return {
            
        }
    },
    components: { BasePlayer },
    props: {
        home: {
            type: Boolean,
             
        },
        squad: {
            type: Array,
            required: true
        },
        formation: {
            type: String,
        },
    },
    methods: {
        defaultPosition(player, index) {
            return {
                    x: this.home ? index < 7 ? 2.5 : 7.5 : index < 7 ? 87.5 : 92.5,
                    y: index < 7 ? (index + 2) * 10 : (index - 5) * 10,
            }
        },
        getFormationPosition(player, index) {
            switch (this.formation) {
                case F_4231:
                    return {
                        x: this.home ? index < 7 ? 15 : 25 : index < 7 ? 87.5 : 92.5,
                        y: index < 7 ? (index + 2) * 10 : (index - 5) * 10,
                    }

                case F_442:
                    switch (index) {
                        case 0: // GK
                            return this.home ? {x: 10, y: 50} : {x: 85, y: 50 }

                        case 1: // LB
                            return this.home ? {x: 20, y: 25} : {x: 75, y: 25 }
                        
                        case 2: // LCB
                            return this.home ? {x: 20, y: 40} : {x: 75, y: 40 }

                        case 3: // RCB
                            return this.home ? {x: 20, y: 55} : {x: 75, y: 55 }
                        
                        case 4: // RB
                            return this.home ? {x: 20, y: 70} : {x: 75, y: 70 }
                        
                        case 5: // LM
                            return this.home ? {x: 30, y: 25} : {x: 65, y: 25}
                        
                        case 6: // LCM
                            return this.home ? {x: 30, y: 40} : {x: 65, y: 40}

                        case 7: // RCM
                            return this.home ? {x: 30, y: 55} : {x: 65, y: 55}
                        
                        case 8: // RM
                            return this.home ? {x: 30, y: 70} : {x: 65, y: 70}

                        case 9: // LCF
                            return this.home ? {x: 40, y: 40} : {x: 55, y: 40}

                        case 10: // RCF
                            return this.home ? {x: 40, y: 55} : {x: 55, y: 55}

                        default:
                            return this.defaultPosition(player, index);
                    }
                    
                    
                default:
                    return this.defaultPosition(player, index);
            }
            

            
        }
        // getPlayerPosition(player) {
        //     if (player.type == )
        // }
    },
    computed: {
        team() {
            return this.squad.map((player, index) => {
                player.key = `${player.number}-${player.name}`

                // player.basePosition = {
                //     x: this.home ? index < 7 ? 2.5 : 7.5 : index < 7 ? 87.5 : 92.5,
                //     y: index < 7 ? (index + 2) * 10 : (index - 5) * 10,
                // }
                console.log(this);
                //player.basePosition = this.defaultPosition(player, index);
                player.basePosition = this.getFormationPosition(player,index);
                return player;
            });

        }
        
    }
}
</script>