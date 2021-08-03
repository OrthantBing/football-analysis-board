<template>
    <div class="container" ref="interactElement" :style="basePositionStyle">
        <!-- <div class="circle" @click="toggleNameVisibility">
            {{ number}}
        </div> -->
        <div class="circle">
            {{ number}}
        </div>
        <div v-if="nameVisibility" class="name">
            {{ name }}
        </div>
    </div>
    

</template>

<script>
import interact from 'interactjs';
export default {
    // props: ['number', 'name'],
    props: {
        number: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        basePosition: {
            type: Object,
            default: () => {
                return {
                    x: 0,
                    y: 0
                }
            }
        }
    },
    data() {
        return {
            nameVisibility: true,
        }
    },
    computed: {
        interactPosition() {
            return {
                x: 0,
                y: 0
            }
        },
        basePositionStyle() {
            // return `transform: translate(${this.basePosition.x}px, ${this.basePosition.y}px)`
            return `position: absolute; left: ${this.basePosition.x}%; top: ${this.basePosition.y}%;`
        }
    },
    beforeUnmount() {
        interact(this.$refs.interactElement).unset();
    },
    mounted() {
        const element = this.$refs.interactElement;
        interact(element).draggable({
            inertia: true,
            listeners: {
                // start: (event) => {
                //     console.log(event.type, event.target);
                // },
                move:  (event) => {
                    this.interactPosition.x += event.dx;
                    this.interactPosition.y += event.dy;
                    event.target.style.transform = `translate(${this.interactPosition.x}px, ${this.interactPosition.y}px)`
                }

                
            }
        })

    },
    methods: {
        toggleNameVisibility() {
            this.nameVisibility = !this.nameVisibility;
        }
    }

}
</script>

<style scoped>
.container {
    max-width: 10vh;
    max-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    touch-action: none;
}

.circle {
    width: 4vh;
    height: 4vh;
    line-height: 4vh;
    border-radius: 50%;
    font-size: 1rem;
    color: slateblue;
    text-align: center;
    background: #fff;
}

.name {
    font-size: 1rem;
    color: white;
}
</style>