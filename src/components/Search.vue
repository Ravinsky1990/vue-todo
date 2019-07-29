<template>
    <div class="wrapper">
        <input type="text" placeholder="Search"
        class="search" v-on:input='changeSearchText'>
    </div>
</template>

<script>
export default {
    methods:{
        changeSearchText(event){
            this.$store.commit('changeFilterText', event.target.value)
        }
    }
}
</script>

<style scoped>
    .wrapper{
        margin-bottom: 1rem;
    }
    .search{
        width: 100%;
        height: 2.4rem;
        font-size: 1rem;
        padding-left: 0.8rem;
        outline: none;
        border: 1px #d1d6dc solid;
        border-radius: 3px;
    }

</style>


