const app = Vue.createApp({
    data(){
        return{
            todos : []
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
        }
    }
}).mount('#app')


function generateId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}