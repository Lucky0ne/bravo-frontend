<template>
  <div class="item item-link" @click="clickItem">
    <div class="item-content">{{attrs.Caption.replace('&', '')}}</div>
  </div>
</template>

<script>
  import { Events } from 'quasar'
  export default {
    methods: {
      clickItem: function () {
        Events.$emit('main-menu-item-click', this.$props.attrs)
      }
    },
    props: ['attrs']
  }
</script>
