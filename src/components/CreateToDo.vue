<template>
    <div class="wrapper">
        <form>
            <input v-model='title'
            v-focus
            type="text" placeholder="Title" class="title">
            <input v-model='priority' type="number" class="priority">
            <button v-on:click='addTodo' type="button">Create</button>
        </form>
    </div>
</template>

<script>
const uuidv1 = require('uuid/v1');
export default {
    directives: {
        focus: {
            inserted(el){
                el.focus()
            }
        }
    },
    data(){
        return {
            title: '',
            priority: 0,
        }
    },
    methods:{
        addTodo(){
            let todoItem = {
                title: this.title,
                priority: this.priority,
                id: uuidv1(),
                done: false
            };
            this.$store.commit('addTodo', todoItem);

            this.title = '',
            this.priority = 0;
        }
    }
}
</script>

<style scoped>
    .wrapper{
        border-bottom: 1px solid #e9e9e9;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
    }
    form{
        font-family: "Roboto", sans-serif;
        display: flex;
        justify-content: space-between;
    }
    .title{
       flex-basis: 440px;
    }
    .priority{
       width: 50px;
    }
    .title,.priority {
        height: 2.4rem;
        font-size: 1rem;
        padding-left: 0.8rem;
        outline: none;
        border: 1px #d1d6dc solid;
        border-radius: 3px;
    }
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
    }

</style>


