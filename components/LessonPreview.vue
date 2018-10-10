<template>
  <div class="card">
    <div class="card-content">
      <h3 class="title">{{ name }}</h3>
      <h4 class="subtitle">
        <span
          v-for="tag in tags"
          :key="tag.id"
        >
          {{ tag.name }}
        </span>
      </h4>
    </div>
    <div class="card-footer">
      <nuxt-link
        class="card-footer-item"
        :to="`/in-the-classroom/${lessonID}`"
      >
        Details
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    tags: Array,
    lessonID: Number
  }
}
</script>

<style scoped>
span:not(:last-child):after {
  content: ", ";
}
</style>
