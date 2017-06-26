<template>
  <div>
    <h1>
      {{unitcode}}
    </h1>
  </div>
</template>

<script>
  export default {
    props: ['unitcode'],
    mounted () {
      this.$nextTick(() => {
        this.$store.dispatch(
          'addOpenUnitElement',
          {
            code: this.$vnode.data.key,
            el: this.$parent.$refs[this.$vnode.data.key]
          }
        )
      })
    }
  }
</script>

<style>
</style>
