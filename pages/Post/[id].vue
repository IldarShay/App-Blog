<script setup lang="ts">
import {useBlogStore} from '../../stores/blog'
import {Post} from '../../types/index'
import {computed, watch, ref} from 'vue'


const store = useBlogStore()
const route = useRoute()
const currentlyDate = ref(new Date(currentlyPost.value.date).toDateString())

const currentlyPost: Post = computed((): Post => store.posts.find(el => el.id === +route.params.id))

watch(currentlyDate, (newValue) => {
  currentlyDate.value = newValue
})
</script>

<template>
  <div class="row">
    <div class="col s12" >
      <h3 v-if="currentlyPost.title">
        {{ currentlyPost.title }}
      </h3>
      <div class="card horizontal">
        <div class="card-stacked">
          <div class="card-content">
            <span>{{ currentlyDate }}</span>
            <hr />
            <p>
              {{ currentlyPost.body }}
            </p>
          </div>
        </div>
        <NuxtLink to="/">
            <button
              class="waves-effect waves-grey darken-3 btn-flat cyan darken-2"
              >
              Back
            </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.col {
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
      margin: 20px
    }
}

</style>