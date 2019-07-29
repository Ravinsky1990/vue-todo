<template>
    <div class="to-do-item-wrapper">
        <p :class='done'
         v-on:click='markAsDone'>
         <span v-if='todo.title == ""'>I am empty :(</span>
         {{todo.title}} - {{todo.priority}}
        </p>
        <img src="../../assets/close.svg" alt="delete" v-on:click='deleteTodo'>
    </div>
</template>

<script>
export default {
    props:{
        todo: {
            type: Object,
            required: true,
        }
    },
    methods:{
        deleteTodo(){
            this.$store.commit('deleteTodo', this.todo);
        },
        markAsDone(){
            this.$store.commit('markAsDone', this.todo);
        }
    },
    computed:{
        done(){
            return {
                done: this.todo.done
            }
        }
    }
}
</script>

<style scoped>
    .to-do-item-wrapper{
        border-bottom: 1px solid #d1d6dc;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items:center;
        font-family: 'Roboto', sans-serif;
    }
    .to-do-item-wrapper p{
        margin: 0 1rem 0 0;
        word-break: break-all;
        cursor: pointer;
    }
    .to-do-item-wrapper img{
        width: 10px;
        height: 10px;
        cursor: pointer;
    }
    .done{
        text-decoration: line-through;
        color:#ff4d4d;
    }
</style>
