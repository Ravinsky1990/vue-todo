<template>
    <div class="wrapper">
        <div class="tasks">
            <span class="rr">Tasks - </span>
            <span class="done">{{doneTodos}}/</span>
            <span class="amount">{{amountTodos}}</span>
        </div>
        <div class="progres-bar">
            <div class="percents" v-bind:style="{width: percents + '%'}">
                <span v-if='percents'>{{percents}}%</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        amountTodos() {
            return this.$store.state.todos.length;
        },
        doneTodos() {
            let doneTodos = 0;
            this.$store.state.todos.forEach((todo)=>{
                if(todo.done){
                    doneTodos += 1
                }
            });
            return doneTodos
        },
        percents(){
            if(this.doneTodos){
                return Math.floor(this.doneTodos*100/this.amountTodos);
            }else{
                return 0
            }
        }
    }
}
</script>

<style scoped>
    .wrapper{
        width: 100%;
        font-family: "Roboto", sans-serif;
        box-sizing: border-box;
        padding-bottom: 1rem;
        border-bottom: 1px #e9ecef solid;
        margin-bottom: 1rem;
    }
    .tasks span{
        font-weight: 500;
        font-size: 1.5rem;
    }
    .tasks{
        margin-bottom: 1rem;
    }
    .progres-bar{
        width: 100%;
        height: 1.5rem;
        background-color: #e9ecef;
        border-radius: 8px;
    }
    .percents{
        display: flex;
        height: 100%;
        background-color: #007bff;
        border-radius: 8px;
        justify-content: center;
        align-items: center;
        color: #fff;
        transition: all 0.5s ease;
    }
</style>

