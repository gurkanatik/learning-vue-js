<template>
  <div class="form-group">
    <label for="todo">Create a todo</label>
    <input type="text" id="todo" name="todo" class="form-control" placeholder="Example : learn vue">
  </div>
  <button type="button" class="btn btn-sm btn-success mt-2 d-table ms-auto add" @click="add">Add a todo !</button>
</template>
<script>
export default {
  inject : ['add']
}
</script>