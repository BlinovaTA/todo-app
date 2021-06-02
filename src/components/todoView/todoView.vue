<template lang="pug">
  div
    button.backButton(@click="goBack") Назад
    h1 Компонент просмотра задания  {{$route.params.todo}}
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>