<template>
    <div class="wrapper">
        <div class="done-undone">
            <FilterBtn title='All' type='filters'></FilterBtn>
            <FilterBtn title='Done' type='filters'></FilterBtn>
            <FilterBtn title='Undone' type='filters'></FilterBtn>
        </div>
        <div class="asc-desc">
            <FilterBtn title='Ascending' type='sorting'></FilterBtn>
            <FilterBtn title='Descending' type='sorting'></FilterBtn>
        </div>
    </div>
</template>

<script>
import FilterBtn from './filter-btn.vue';

export default {
    components: {
        FilterBtn
    }
}
</script>

<style scoped>
    .wrapper{
        padding-bottom: 1rem;
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
        margin-right: 0.5rem;
    }
    .done-undone{
        margin-bottom: 0.5rem;
    }
</style>


