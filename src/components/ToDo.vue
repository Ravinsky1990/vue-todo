<template>
  <div class="todo">
    <ProgressBar></ProgressBar>
    <CreateToDo></CreateToDo>
    <Search></Search>
    <Filters></Filters>
    <List></List>
  </div>
</template>

<script>
//components  
import ProgressBar from './ProgressBar';
import CreateToDo from './CreateToDo';
import Search from './Search';
import Filters from './Filters';
import List from './List/List';

export default {
  name: 'app',
  components: {
    ProgressBar,
    CreateToDo,
    Search,
    Filters,
    List
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
  }
  body{
    margin: 0px;
  }
  .todo{
    padding-top: 100px;
    max-width: 600px;
    margin: auto;
  }
</style>
