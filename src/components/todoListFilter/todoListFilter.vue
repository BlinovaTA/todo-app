<template lang="pug">
  div
    button(
      v-for="filter in filters"
      type="button"
      :class="{active: filter === currentFilter}"
      @click="filterCurrnetTodos(filter)"
    ) {{filter}}
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      filters: ['all', 'active', 'completed'],
      currentFilter: "all"
    }
  },
  methods: 
    {...mapMutations(["filterTodos"]),
    filterCurrnetTodos(filter) {
      this.currentFilter = filter;
      this.filterTodos(filter);
    }
  }
}
</script>

<style lang="scss" scoped src="./todoListFilter.scss"></style>