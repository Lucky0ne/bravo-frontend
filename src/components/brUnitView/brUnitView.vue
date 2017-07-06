<template>
  <div class="card bg-teal text-white text-center">
    <div class="card-title">
      <big>{{unitcode}}</big>
    </div>
    <div class="card-content">
      <br-unit-view-grid :data="table">unit content</br-unit-view-grid>
    </div>
  </div>
</template>

<script>
  import {Events} from 'quasar'
  export default {
    props: ['unitcode'],
    mounted () {
      Events.$emit('on-unit-add', this.$parent.$refs)
    },

    computed: {
      table () {
        return this.$store.getters.getOpenUnits
      }
    }

  }
</script>

<style>
</style>
