<template lang="pug">
  .todo-input
    .error {{validation.firstError('todo.name')}}
    input(
      type="text"
      placeholder="Todo Name"
      autofocus
      v-model="todo.name"
      :class="{'valid-error' : validation.hasError('todo.name')}"
      @keydown.enter="addNewTodo"
    ).input
</template>

<script>
import uniqid from "uniqid";
import { Validator } from "simple-vue-validator";
import { mapMutations } from "vuex";

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
    ...mapMutations(['addTodo']),
    addNewTodo() {
      this.$validate().then(success => {
        if (!success) return;
        
        this.todo.id = uniqid();

        this.addTodo({...this.todo});

        this.todo.name = "";
        this.validation.reset();
      })
    }
  }
}
</script>

<style lang="scss" scoped src="./todoInput.scss"></style>