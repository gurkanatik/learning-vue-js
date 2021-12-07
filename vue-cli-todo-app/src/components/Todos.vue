<template>
  <h4>Todo List</h4>
  <br/>
  <TodoList :is_done="false"/>
  <hr>
  <TodoList/>
</template>
<script>
import TodoList from "@/components/TodoList";
export default {
  components: {TodoList}
}
</script>