<template>
  <div class="item item-link" @click="clickItem">
    <div class="item-content">{{attrs.Caption.replace('&', '')}}</div>
  </div>
</template>

<script>
  export default {
    methods: {
      clickItem: function () {
        this.$emit('item-click', this.$props.attrs)
      }
    },
    props: ['attrs']
  }
</script>
