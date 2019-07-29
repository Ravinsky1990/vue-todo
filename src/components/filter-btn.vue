<template>
    <button :class='active' v-on:click='addSorting'>
        {{title}}
    </button>
</template>

<script>
    export default {
        props:{
            title:{
                type: String,
                require: true
            },
            type:{
                type: String,
                require: true
            }
        },
        methods:{
            addSorting(){
                if(this.type == 'filters'){
                    let filterType = this.$store.state.filters[this.title.toLowerCase()]
                    if(filterType){
                        return
                    }else{
                        this.$store.commit('changeFilterProp', this.title.toLowerCase())
                    }
                }else{
                    let sortType = this.$store.state.sorting[this.title.toLowerCase()]
                    if(sortType){
                        return
                    }else{
                        this.$store.commit('changeSortingProp', this.title.toLowerCase())
                    }
                }
            }
        },
        computed:{
            active(){
               if(this.type === 'filters'){
                    for (let key in this.$store.state.filters){
                        if (key == this.title.toLowerCase()){
                            return{
                                active: this.$store.state.filters[key]
                            }
                        }
                    }
               }else{
                    for (let key in this.$store.state.sorting){
                        if (key === this.title.toLowerCase()){
                            return{
                                active: this.$store.state.sorting[key]
                            }
                        }
                    }
               } 
            }
        }
    }
</script>

<style scoped>
    button{
        height: 2.4rem;
        padding: 0.5rem;
        background-color: #fff;
        border: 2px solid #007bff;
        outline: none;
        color: #007bff;
        font-weight: 600;
        font-size: 1rem;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 0.5rem;
    }
    .active{
        background-color: #007bff;
        color: #ffffff;
    }
</style>