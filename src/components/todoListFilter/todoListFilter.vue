<template lang="pug">
  div
    button(
      v-for="filter in filters"
      type="button"
      :class="{active: filter === currentFilter}"
      @click="filterTodos(filter)"
    ) {{filter}}
</template>

<script>
export default {
  data() {
    return {
      filters: ['all', 'active', 'completed'],
      currentFilter: "all"
    }
  },
  methods: {
    filterTodos(filter) {
      this.currentFilter = filter;
      this.$emit("filterTodos", filter);
    }
  }
}
</script>

<style lang="scss" scoped src="./todoListFilter.scss"></style>