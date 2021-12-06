const app = Vue.createApp({
    data(){
        return {
            comments: [
                {id : 1, comment: "lorem", like: 0, dislike : 0},
                {id : 1, comment: "lorem", like: 0, dislike : 0},
                {id : 1, comment: "lorem", like: 0, dislike : 0},
                {id : 1, comment: "lorem", like: 0, dislike : 0},
                {id : 1, comment: "lorem", like: 0, dislike : 0}
            ]
        }
    },
    methods:{

    },
    computed:{
    }
}).mount('#app')

function generateId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}