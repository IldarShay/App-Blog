<script setup lang="ts">
import {useBlogStore} from '../stores/blog'
import {Post} from '../types/index'
import {countTotalPage} from '../composables/useCountTotalPage'


const store = useBlogStore()
const searchText: Ref<string> = ref('')
const selectedSort: Ref<string>  = ref('')
const isPostsLoading: Ref<boolean> = ref(false)


const sortedPosts: Post[] = computed((): Post[] => store.posts.sort((post1, post2) => post1[selectedSort.value]?.localeCompare(post2[selectedSort.value])))
const searchSelectedSort: Post[] = computed((): Post[] => sortedPosts.value.filter((post: Post) => post.title.toLowerCase().includes(searchText.value.toLocaleLowerCase())).splice((store.currentlyPage - 1) * 10, 10))


const createPost = (post: Post): void => {
    store.posts.unshift(post) 
    countTotalPage(store.totalPage, store.posts)
}
const updateFilterSort = (filter):void => selectedSort.value = filter
</script>

<template>
  <div class="container">
    <div class="header">
        <header-component/>
    </div>
    <div class="main">
        <div class="main-navbar">
          <post-form @create="createPost" class="post-form"/>
          <search-field v-model="searchText" class="search-field"/>
          <select-filter
            @update="updateFilterSort"
            v-model="selectedSort"
            :options="store.sortOptions"
            class="select-filter"
          />
        </div>
        <post-list
          v-if="!isPostsLoading"
          :posts="searchSelectedSort"
        />
        <load-component v-else/>
    </div>
    <div class="footer">
        <pagination-component/>
    </div>
  </div>
</template>


<style lang="scss">
.container {
    .main{
        .main-navbar{
            display: flex; 
            justify-content: space-between;
            .header-posts {
                display: flex;
                justify-content: space-between;
            }
            .post-form {
                margin-top: 25px;
            }
            .search-field{
                width: 25vw
            }
        }
    }
}
@media screen and (max-width: 420px) {
    .container {
        .main{
            .main-navbar{
                display: flex; 
                justify-content: space-between;
                .header-posts {
                    display: flex;
                    justify-content: space-between;
                }
                .post-form {
                    width: 15vw;
                    margin-top: 25px
                }
                .search-field{
                    margin-left: 20px;
                    margin-right: 20px
                }
            }
        }
        h3 {
            font-size: 24px;
        }
    }
}
body::-webkit-scrollbar {
  width: 3px;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px rgba(0, 0, 0);
}
 
body::-webkit-scrollbar-thumb {
  background-color: black;
}
</style>