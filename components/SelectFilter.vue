<script setup lang="ts">
const select = ref()
const optionFilterSort = ref('')


const props = defineProps<{
  options: Array<string>
}>()
const emit = defineEmits<{
  update: [value: string]
}>()


const  changeFilter = (e: Event) => {
  optionFilterSort.value = e.target.value
  emit('update', optionFilterSort.value)
}


onMounted(() => M.FormSelect.init(select.value) )
</script>

<template>
  <div class="input-field col">
    <select ref="select" :value="optionFilterSort" @change="changeFilter">
      <option value="" disabled selected>Choose your filter</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>
