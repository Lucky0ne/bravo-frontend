<template>
  <div id="demo">
  <div class="layout-padding">
  <q-data-table
    :data="table"
    :config="config"
    :columns="columns"
    @refresh="refresh">
    <template slot="col-message" scope="cell">
      <span class="light-paragraph">{{cell.data}}</span>
    </template>
    <template slot="col-source" scope="cell">
    <span v-if="cell.data === 'Audit'" class="label text-white bg-primary">
      Audit
    </span>
      <span v-else class="label-text-white-bg-negative">{{cell.data}}</span>
    </template>
    <template slot="selection" scope="selection">
      <button class="primary clear" @click="changeMessage(selection)">
        <i>edit</i>
      </button>
      <button class="primary clear" @click="deleteRow(selection)">
        <i>delete</i>
      </button>
    </template>
  </q-data-table>
  </div>
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
