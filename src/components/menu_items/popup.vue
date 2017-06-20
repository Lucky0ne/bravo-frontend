<template>
  <!--q-drawer-link v-bind:to="menuItem.attr.Group"-->
  <q-collapsible v-bind:group="group" v-bind:label="attrs.Caption.replace('&', '')">
    <template v-for="child in children">
      <main-menu-popup v-if="child.name == 'Popup'" v-bind:attrs="child.attr" v-bind:children="child.children"
                       group="child.attr.Group"></main-menu-popup>
      <main-menu-separ v-else-if="child.name == 'Separator'"></main-menu-separ>
      <main-menu-item  v-else-if="child.name == 'MenuItem'" v-bind:attrs="child.attr"></main-menu-item>
      <div v-else><span>{{child.name}}</span></div>
    </template>
  </q-collapsible>
</template>

<script>
  import cpSepar from './separator.vue'
  import cpItem from './item.vue'
  export default {
    data () {
      return {}
    },
    props: ['attrs', 'group', 'children'],
    name: 'main-menu-popup',
    components: {
      'main-menu-separ': cpSepar,
      'main-menu-item': cpItem
    }
  }

</script>
