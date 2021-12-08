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
import axios from "axios";

export default {
  components: {AddTodo,Todos},
  data(){
    return {
      provideData: {
        todos : []
      }
    }
  },
  mounted() {
    axios.get('http://localhost:3000/todos').then((response) => {
      this.provideData.todos = response.data
    })
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
      const todoInput = document.getElementById('todo')
      const todoData = {
        id: generateId(),
        text : todoInput.value,
        is_done : false
      }

      axios.post('http://localhost:3000/todos', todoData).then((response) => {
        console.log(response)
        this.provideData.todos.push(todoData)
        todoInput.value = ''
      })

    },
    remove(id){
      axios.delete(`http://localhost:3000/todos/${id}`).then((response) => {
        console.log(response)
        this.provideData.todos = this.provideData.todos.filter((todo) => todo.id !== id)
      })
    },
    complete(id){
      const todoIndex = this.provideData.todos.findIndex(todo => todo.id === id);
      this.provideData.todos[todoIndex].is_done = true
      const todoData = this.provideData.todos[todoIndex]

      axios.put(`http://localhost:3000/todos/${id}`, todoData).then((response) => {
        console.log(response)
      })
    }
  }
}

function generateId() {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}
</script>