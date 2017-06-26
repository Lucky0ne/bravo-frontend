<template>
  <div class="shadow-1">
    <br-unit-tabs slot="navigation"
                  :refs="$refs"
                  v-model="xTabsModel"
                  class="shadow-1 narrow-tabs"
    >
      <br-unit-tab v-for="value in tabList" :key="value.code" :name="value.code" class="narrow-tab">
        {{value.name}}
      </br-unit-tab>
    </br-unit-tabs>
  </div>
</template>

<script>

  export default {
    computed: {
      xTabsModel: {
        get () {
          return this.$store.getters.getActiveUnitTabKey
        },
        set (value) {
          this.$store.dispatch('activateUnitTab', value)
        }
      },
      tabList () {
        return this.$store.getters.getOpenUnits
      }
    }
  }
</script>

<style lang="stylus">
  .narrow-tabs
    padding-top 5px
    min-height 20px
    z-index 10

  .narrow-tab
    min-height 20px
    padding 0 8px
    text-transform none
</style>
