<template lang="pug">
  .todo
    todo-input
    todo-list(
      v-if="todos.length > 0"
      :todos="filteredTodos"
    )
</template>

<script>
import todoInput from "../todoInput";
import todoList from "../todoList";
import { mapState } from "vuex";

export default {
  components: {
    todoInput,
    todoList
  },
  computed: {
    ...mapState({
      todos: state => state.todos.todos,
      filter: state => state.todos.filter
    }),
    filteredTodos() {
      switch (this.filter) {
        case "all":
          return this.todos; 
        case "active":
          return this.todos.filter(item => item.checked === false); 
        case "completed":
          return this.todos.filter(item => item.checked); 
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./todo.scss"></style>