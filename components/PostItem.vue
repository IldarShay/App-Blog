<script setup lang="ts">
import { useBlogStore } from '~/stores/blog';
import { Post } from '~/types';
const store = useBlogStore()


const props = defineProps<{
  post:  Post
}>()


const removePost = (post: Post) => {
    store.posts = store.posts.filter((p) => p.id != post.id);
    store.totalPage = Math.ceil(store.posts.length/10)
}
</script>
<template>
  <div class="col s12">
    <NuxtLink :to="'/post/' + post.id" class="header">
      <h3>
        {{ post.title }}
      </h3>
    </NuxtLink>
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
          <span>{{ new Date(post.date).toDateString() }}</span>
          <hr />
          <p>
            {{ post.body }}
          </p>
        </div>
      </div>
      <button
        @click="removePost(post)"
        class="waves-effect waves-grey darken-3 btn-flat deep-orange darken-3"
        style="margin: 15px 20px"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header{
  text-decoration: none;
  color: black
}
.header :hover{
  text-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
}
</style>
