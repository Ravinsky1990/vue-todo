<template>
    <div>
        <p v-if='defaultMsg'>Add your awesome todos!</p>
        <div class="list">
            <ToDoItem
            v-for="todo in todos"
            v-bind:todo = 'todo'
            v-bind:key="todo.id"
            ></ToDoItem>
        </div>
    </div>
</template>

<script>
import ToDoItem from './ToDoItem';
import {select} from '../../helpers/select';

export default {
    computed: {
        todos(){
            const settings = {
                text: this.$store.state.filters.text,
                done: this.$store.state.filters.done,
                undone: this.$store.state.filters.undone,
                asc: this.$store.state.sorting.ascending,
                desc: this.$store.state.sorting.descending
            };
            return select(this.$store.state.todos, settings)
        },
        defaultMsg(){
            return this.$store.state.todos.length == 0;
        } 
    },
    components: {
        ToDoItem
    }
}
</script>

<style scoped>
    .list{
        border: 1px solid #d1d6dc;
        border-bottom: none;
    }
    p{
        margin-top: 1rem;
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }
</style>


