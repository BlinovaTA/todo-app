<template lang="pug">
  .todo-item(:class="{checked: todo.checked}")
    label.label
      .input-block
        input.input(
          type="checkbox"
          @change="checkTodoAsCompleted"
          :checked="todo.checked"
        )
      .title {{ todo.name }}
    .button
      router-link.view(
        tag="button"
        :to="`/view/${todo.name}`"
      ) ➜
    .button
      button.remove(
        type="button"
        @click="removeExistedTodo"
      ) ✖
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    todo: Object
  },
  methods: {
    ...mapMutations([
      "removeTodo", 
      "checkTodo"
    ]),
    removeExistedTodo() {
      this.removeTodo(this.todo.id);
    },
    checkTodoAsCompleted(e) {
      const todoItem = {
        ...this.todo,
        checked: e.target.checked
      };

      this.checkTodo(todoItem);
    }
  }
}
</script>

<style lang="scss" scoped src="./todoListItem.scss"></style>