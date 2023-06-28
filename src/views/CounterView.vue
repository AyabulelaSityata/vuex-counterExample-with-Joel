<template>
    <div class="container">
        <h1>Counter</h1>
        <div class="row">
            <div class="col">
                <button @click="increment" class="btn btn-success">+</button>
            </div>
            <div class="col counter">
                <p class="lead">{{ counter }}</p>
            </div>
            <div class="col">
                <button @click="decrement" class="btn btn-success">-</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            counter() {
                return this.$store.state.counter
            }
        },
        methods: {
            increment() {
                this.$store.dispatch('increment')
            },
            decrement() {
                this.$store.dispatch('decrement')
            }
        }
    }
</script>

<style scoped>
.counter {
    background-color: black;
    color: white;
    
}

</style>