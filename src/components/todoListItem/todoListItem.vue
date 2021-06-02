<template lang="pug">
  .todo-item(:class="{checked: todo.checked}")
    label.label
      .input-block
        input.input(
          type="checkbox"
          @change="checkTodo"
          :checked="todo.checked"
        )
      .title {{ todo.name }}
    .button
      button.view(
        type="button"
        @click="removeTodo"
      ) ➜
    .button
      button.remove(
        type="button"
        @click="removeTodo"
      ) ✖
</template>

<script>
export default {
  props: {
    todo: Object
  },
  methods: {
    removeTodo() {
      this.$emit("removeTodo", this.todo.id);
    },
    checkTodo(e) {
      const todoItem = {
        ...this.todo,
        checked: e.target.checked
      };

      this.$emit("checkTodo", todoItem);
    }
  }
}
</script>

<style lang="scss" scoped src="./todoListItem.scss"></style>