<script setup lang="ts">
import {useBlogStore} from '../stores/blog'


const store = useBlogStore()


const changePage = (pageNum: number) => store.currentlyPage = pageNum
</script>

<template>
<ul class="pagination" style="margin-left: auto" v-show="store.totalPage > 1">
    <li
    v-for="pageNum in store.totalPage"
    :key="pageNum"
    :class="{
        active: store.currentlyPage === pageNum,
        'waves-effect': store.currentlyPage != pageNum 
        }"
        @click="changePage(pageNum)"
    >
    <a class="waves-effect">{{ pageNum }}</a>
    </li>
</ul>
</template>


<style scoped lang="scss">

</style>