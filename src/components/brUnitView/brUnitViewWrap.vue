<template>
  <div>
    <br-unit-view v-for="value in unitList" :ref="value.code" :id="value.code" :key="value.code" :unitcode="value.code"></br-unit-view>
  </div>

</template>

<script>
export default {
  computed: {
    unitList () {
      return this.$store.getters.getOpenUnits
    }
  }
}
</script>

<style>
</style>
