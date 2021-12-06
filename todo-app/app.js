const app = Vue.createApp({
    data(){
        return{
            todos : [
                {id: 1, text: 'learn vue', is_done: 0},
                {id: 2, text: 'learn vue cli', is_done: 0},
                {id: 3, text: 'learn laravel', is_done: 0},
            ]
        }
    },
    methods:{
        add(){
            let todoInput = document.getElementById('todo')
            this.todos.push({
                id: generateId(),
                text : todoInput.value,
                is_done : 0
            })
            todoInput.value = ''
        },
        remove(id){
            this.todos = this.todos.filter((todo) => todo.id !== id)
        },
        complete(id){
            let todoIndex = this.todos.findIndex(todo => todo.id === id);
            this.todos[todoIndex].is_done = 1
        },
        getTodos(is_done){
            return this.todos.filter((todo) => todo.is_done === is_done)
        }
    },
    computed:{
        completedTodosCount(){
            return this.todos.filter((todo) => todo.is_done).length;
        },
        unCompletedTodosCount(){
            return this.todos.filter((todo) => !todo.is_done).length;
        }
    },
    mounted() {
    }
}).mount('#app')


function generateId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}