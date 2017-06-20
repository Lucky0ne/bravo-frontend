<template>
  <div class="item item-link">
    <div class="item-content">{{attrs.Caption.replace('&', '')}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: ['attrs']
  }
</script>
