<script setup lang="ts">
import { Post } from '~/types';

const title = ref('')
const body = ref('')

const emit = defineEmits<{
  create: [value: Post]
}>()


const createPost = () => {
  const post: Post = {
    id : Date.now(),
    date: Date.now(),
    title: title.value || 'New post',
    body: body.value,
  }
  emit("create", post);
  title.value = ''
  body.value = ''
}

onMounted(() => {
  M.Modal.init(document.querySelector("#modal1"), {
      startingTop: "14%",
      endingTop: "25%",
    });
})
</script>

<template>
  <div>
    <button data-target="modal1" class="btn modal-trigger">Add new post</button>
    <div class="dialog">
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h3>New post</h3>
          <form>
            <div class="col">
              <div class="input-field col s2">
                <input
                  placeholder=""
                  id="title"
                  type="text"
                  class="input"
                  v-model="title"
                />
                <label for="title">Title</label>
              </div>
              <div class="input-field col s2">
                <textarea
                  id="body"
                  class="materialize-textarea"
                  v-model="body"
                />
                <label for="body">Description</label>
              </div>
              <button
                class="btn waves-effect modal-close"
                @click.prevent="createPost"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
