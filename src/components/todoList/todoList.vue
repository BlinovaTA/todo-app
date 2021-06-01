<template lang="pug">
.todo-list
  .content
    ul.list
      li.item(v-for="todo in todos" :key="todo.id")
        todo-list-item(
          :todo="todo"
          @removeTodo="removeTodo"
          @checkTodo="checkTodo"
        )
  .footer
    .footer-content
      .counter {{todos.length}} items left
      .filter
        todo-list-filter(
          @filterTodos="filterTodos"
        )
</template>

<script>
import todoListFilter from "../todoListFilter";
import todoListItem from "../todoListItem";

export default {
  props: {
    todos: Array
  },
  components: {
    todoListFilter,
    todoListItem
  },
  methods: {
    removeTodo(todoId) {
      this.$emit('removeTodo', todoId);
    },
    checkTodo(todo) {
      this.$emit("checkTodo", todo);
    },
    filterTodos(filter) {
      this.$emit("filterTodos", filter);
    }
  }
}
</script>

<style lang="scss" scoped src="./todoList.scss"></style>