<template lang="pug">
  .container
    router-view
</template>

<script>
import todo from "./components/todo";

export default {
  name: 'app',
  components: {
    todo
  },
  data () {
    
  }
}
</script>

<style lang="scss" src="./main.scss"></style>
