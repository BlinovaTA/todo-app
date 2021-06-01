<template lang="pug">
  .todo-input
    .error {{validation.firstError('todo.name')}}
    input(
      type="text"
      placeholder="Todo Name"
      autofocus
      v-model="todo.name"
      :class="{'valid-error' : validation.hasError('todo.name')}"
      @keydown.enter="addTodo"
    ).input
</template>

<script>
import uniqid from "uniqid";
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "todo.name"(value) {
      return Validator.value(value).required("Поле не может быть пустым");
    }
  },
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
      this.$validate().then(success => {
        if (!success) return;
        
        this.todo.id = uniqid();
        this.$emit("addTodo", {...this.todo});
        this.todo.name = "";
        this.validation.reset();
      })
    }
  }
}
</script>

<style lang="scss" scoped src="./todoInput.scss"></style>