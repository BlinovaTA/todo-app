<template lang="pug">
  .todo
    todo-input(
      @addTodo="addTodo"
    )
    todo-list(
      v-if="todos.length > 0"
      :todos="filteredTodos"
      @removeTodo="removeTodo"
      @checkTodo="checkTodo"
      @filterTodos="filterTodos"
    )
</template>

<script>
import todoInput from "../todoInput";
import todoList from "../todoList";

export default {
  components: {
    todoInput,
    todoList
  },
  data() {
    return {
      todos: [],
      filter: "all"
    }
  },
  computed: {
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
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter(item => item.id !== todoId);
    },
    checkTodo(todo) {
      this.todos = this.todos.map(item => (item.id === todo.id ? todo : item));
    },
    filterTodos(filter) {
      this.filter = filter;
    }
  }
}
</script>

<style lang="scss" scoped src="./todo.scss"></style>