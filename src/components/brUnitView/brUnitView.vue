<template>
  <div class="card bg-teal text-white text-center">
    <div class="card-title">
      <big>{{unitcode}}</big>
    </div>
    <div class="card-content">
      Unit content
    </div>
  </div>
</template>

<script>
  import {Events} from 'quasar'
  export default {
    props: ['unitcode'],
    mounted () {
      Events.$emit('on-unit-add', this.$parent.$refs)
    }
  }
</script>

<style>
</style>
