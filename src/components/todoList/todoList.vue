<template lang="pug">
.todo-list
  .content
    ul.list
      li.item(v-for="todo in todos" :key="todo.id")
        todo-list-item(
          :todo="todo"
        )
  .footer
    .footer-content
      .counter {{todos.length}} items left
      .filter
        todo-list-filter
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
  }
}
</script>

<style lang="scss" scoped src="./todoList.scss"></style>