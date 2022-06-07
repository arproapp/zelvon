<template>
  <h1>Lista de Tareas</h1>
  <table class="table table-nowrap">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Categorías</th>
        <th scope="col">Estado</th>
        <th scope="col">Número</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tarea, index) in tareas" :key="index">
        <th scope="row">{{ tarea.firstname }}</th>
        <td>{{ tarea.lastname }}</td>
        <td>{{ tarea.company }}</td>
        <td>{{ tarea.phone }}</td>
        <td>{{ tarea.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(['tareas']),
  },
};
</script>
