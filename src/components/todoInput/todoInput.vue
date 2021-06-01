<template lang="pug">
  .todo-input
    input(
      type="text"
      placeholder="Todo Name"
      autofocus
      v-model="todo.name"
      @keydown.enter="addTodo"
    ).input
</template>

<script>
import uniqid from "uniqid";

export default {
  data() {
    return {
      todo: {
        id: 0,
        name: "",
        checked: false
      }
    }
  },
  methods: {
    addTodo() {
      this.todo.id = uniqid();
      this.$emit("addTodo", {...this.todo});
      this.todo.name = "";
    }
  }
}
</script>

<style lang="scss" scoped src="./todoInput.scss"></style>