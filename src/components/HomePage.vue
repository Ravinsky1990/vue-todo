<template>
    <div class="homePage">
        <h1>
            Awesome ToDo
        </h1>
        <div class="btnWrapper">
            <button class="getStarted"
            v-on:click='goToApp'
            >Getting started free!</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goToApp(){
                this.$router.push('/todo')
            }
        }
    }
    
</script>

<style scoped>
    .homePage{
        position: relative;
        height:100vh;
        font-family: 'Roboto', sans-serif;
        padding-top: 150px;
        box-sizing: border-box;
        background-image: url('../assets/bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;
    }
    h1{
        text-align: center;
        font-size: 4rem;
        color: #007bff;
        text-transform: uppercase;
        letter-spacing: 8px;
    }
    .btnWrapper{
        text-align: center;
    }
    .homePage:after{
        content: '';
        background-color: #ffffff;
        position: absolute;
        width: 100%;
        height:100%;
        top: 0;
        z-index: -1;
        opacity: 0.9;
    }
    .getStarted{
        background-color: #007bff;
        border: none;
        outline: none;
        color: #fff;
        width: 140px;
        height: 50px;
        font-size: 0.8rem;
        border-radius: 3px;
        cursor: pointer;
    }
</style>