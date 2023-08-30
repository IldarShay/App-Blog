<script setup lang="ts">
import axios from "axios"
import {useBlogStore} from '../stores/blog'


const store = useBlogStore()
const isPostsLoading: Ref<boolean> = ref(false)


const loadingPosts = async () => {
    try {
        isPostsLoading.value = true;
        const response = await axios(store.url);
        const newPosts = response.data
        store.posts = [...store.posts, ...newPosts] ;
        store.posts.forEach((res) => {
          return (res.date = Date.now());
        });
        store.totalPage = Math.ceil(store.posts.length/10)
        store.isDownloadPostsOnServer = true
    } catch (error) {
        console.log(error);
    } finally {
        isPostsLoading.value = false;
    }
}
</script>

<template>
<div>
    <h2>My favorite posts</h2>
    <div class="header-posts" v-show="!store.isDownloadPostsOnServer">
        <h3>Download posts</h3>
        <button @click="loadingPosts()" class="shake">
            <a class="btn-floating btn-large waves-effect waves-light red"><img src="/download.svg"/></a>
        </button>
    </div>
</div>
</template>


<style scoped lang="scss">
.header-posts{
    display: flex;
    align-items: center;
    gap: 50px;
    button{
        border: none;
        background: none;
    }
    a{
        padding-top: 10px;
    }
}
.shake {
  animation: shake 1.2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake{
  10%,
  90% {
    transform: translate3d(0, -1px, 0);
  }

  20%,
  80% {
    transform: translate3d(0, 2px, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(0, -4px, 0);
  }

  40%,
  60% {
    transform: translate3d(0, 4px, 0);
  }
}

@media screen and (max-width: 420px) {
    h2{
        font-size: 45px;
    }
    .header-posts{
        h3{
            font-size: 24px;
        }
    }
}
</style>