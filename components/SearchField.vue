<script setup lang="ts">
const modelValue: Ref<string> = ref('')


const emit = defineEmits<{
  'update:model-value': [value: string]
}>()


const searchText = (e: Event) => {
  modelValue.value = e.target.value.trim()
  emit('update:model-value', modelValue.value)
}
</script>

<template>
  <div class="input-field" style="width: 40%">
    <input
      id="search"
      type="text"
      class="validate"
      v-model="modelValue"
      @input="searchText"
    />
    <label for="search">Input title post</label>
  </div>
</template>
