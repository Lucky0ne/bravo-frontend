<template>
  <!--q-drawer-link v-bind:to="menuItem.attr.Group"-->
  <q-collapsible v-bind:group="group" v-bind:label="attrs.Caption.replace('&', '')">
    <template v-for="child in children">
      <br-mmenu-popup v-if="child.name == 'Popup'" v-bind:attrs="child.attr" v-bind:children="child.children"
                       group="child.attr.Group" v-on:menu-item-click="onItemClick"></br-mmenu-popup>
      <br-mmenu-separ v-else-if="child.name == 'Separator'"></br-mmenu-separ>
      <br-mmenu-item v-else-if="child.name == 'MenuItem'" v-bind:attrs="child.attr"
                      v-on:item-click="onItemClick"></br-mmenu-item>
      <div v-else><span>{{child.name}}</span></div>
    </template>
  </q-collapsible>
</template>

<script>
  export default {
    props: ['attrs', 'group', 'children'],
    name: 'main-menu-popup',
    methods: {
      onItemClick (item) {
        this.$emit('menu-item-click', item)
      }
    }
  }

</script>
