<script setup lang="ts">
import { useBlogStore } from '~/stores/blog';
import { Post } from '~/types';


const store = useBlogStore()


const props = defineProps<{
  posts: Post[]
}>()
</script>

<template>
  <div>
    <transition-group name="post-list">
      <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      >
      </post-item>
    </transition-group>
    <h3 v-if="!store.posts.length">Post list is empty 
      <img class="spinner" src="/spinner.svg"/></h3>
  </div>
</template>

<style scoped lang="scss">
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.6s ease;
}
h3{
  display: flex;
  gap: 25px;
  .spinner {
    margin-top: auto;
  }
}
</style>
