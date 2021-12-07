<template>
  <h5>{{ is_done === true ? 'Completed' : 'UnCompleted' }}</h5>
  <ul>
    <li class="d-flex align-items-center justify-content-between mb-2" v-for="todo in this.provideData.todos.filter(todo => todo.is_done === is_done)" :key="todo.id">
      <span class="d-block">{{todo.text}}</span>
      <div class="d-flex align-items-center justify-content-between">
        <button type="button" class="btn btn-sm btn-info text-white me-1" @click="complete(todo.id)" v-if="is_done === false">Done</button>
        <button type="button" class="btn btn-sm btn-danger" @click="remove(todo.id)">Remove</button>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data(){
    return {
      todos : this.provideData.todos.filter(todo => todo.is_done === true)
    }
  },
  methods: {

  },
  props: {
    is_done: {
      type: Boolean,
      default: true
    }
  },
  inject : ['provideData', 'remove', 'complete']
}
</script>