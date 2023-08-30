import { defineStore } from "pinia";

export const useBlogStore = defineStore('blog', () => {
  const url = "https://jsonplaceholder.typicode.com/posts"
  const posts = ref([])
  const currentlyPage = ref(1)
  const totalPage = ref()
  const isDownloadPostsOnServer = ref(false)
  const sortOptions= [
    {
      value: "title",
      name: "On title",
    },
    {
      value: "body",
      name: "On description",
    },
  ]
  
  return {
    posts,
    sortOptions,
    url,
    currentlyPage,
    totalPage,
    isDownloadPostsOnServer
  }
  
},
{persist: {
  storage: localStorage,
  paths: ["posts", 'isDownloadPostsOnServer', 'totalPage', 'currentlyPage'],
}
}
)