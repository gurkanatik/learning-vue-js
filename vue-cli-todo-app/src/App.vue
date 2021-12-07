<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-12 col-sm-4 mx-auto">
        <AddTodo/>
        <hr>
        <Todos/>
      </div>
    </div>
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";

export default {
  components: {AddTodo,Todos},
  data(){
    return {
      provideData: {
        todos : [
          {id: 1, text: 'learn vue', is_done: false},
          {id: 2, text: 'learn vue cli', is_done: false},
          {id: 3, text: 'learn vue vite', is_done: false},
          {id: 4, text: 'learn codeigniter', is_done: true},
          {id: 5, text: 'learn html, css', is_done: true},
        ]
      }
    }
  },
  provide(){
    return{
      provideData: this.provideData,
      add: this.add,
      remove: this.remove,
      complete: this.complete
    }
  },
  methods: {
    add(){
      let todoInput = document.getElementById('todo')
      this.provideData.todos.push({
        id: generateId(),
        text : todoInput.value,
        is_done : false
      })
      todoInput.value = ''
    },
    remove(id){
      this.provideData.todos = this.provideData.todos.filter((todo) => todo.id !== id)
    },
    complete(id){
      let todoIndex = this.provideData.todos.findIndex(todo => todo.id === id);
      this.provideData.todos[todoIndex].is_done = true
    }
  }
}

function generateId() {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}
</script>