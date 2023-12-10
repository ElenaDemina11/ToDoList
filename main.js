// локальная регистрация объекта

const todoItem = {
    props: ["todo", "index"],
    emits: ["complete-done"],
    methods: {
        complete() {
            this.$emit("complete-done");
        }
    },
    template: `
        <div> {{ index }} - {{ todo.title }}
            <input type="checkbox" :checked="todo.completed" @click="complete">
        </div>
    `,
};

const app = Vue.createApp({
    data() {
        return {

            todoList: [
                {
                    "title": "Название вашей задачи",
                    "completed": false,
                    "noActive": false,
                },
                {
                    "title": "Название вашей задачи",
                    "completed": false,
                    "noActive": false,
                },
            ],
        };
    },
    methods: {
        makeDone(index) {
            this.todoList[index].completed = !this.todoList[index].completed;
        },
        add() {
            if (!this.itemForAdd.trim()) {
                return;
            }
            this.todoList.push({
                "title": this.itemForAdd,
                "completed": false,
                "noActive": false,
                "id": this.todoList.length + 1
            })
            console.log(this.todoList);
        },
        del(index) {
            this.todoList.splice(index, 1);
        },
        filter1() {
            this.todoList.forEach(element => {
                if (element.completed == false) { element.noActive = true }
                else { element.noActive = false }
            });
        },
        filter2() {
            this.todoList.forEach(element => {
                if (element.completed == true) { element.noActive = true }
                else { element.noActive = false }
            });
        },
        allTasks() {
            this.todoList.forEach(element => {
                element.noActive == false
            });
        },
        sort1() {
            this.todoList = this.todoList.sort((a, b) => a / title ? 1 : -1);
            console.log(this.todoList);
        },
        sort2() {
            console.log('sort 2 called')
            this.todoList = this.todoList.sort((a, b) => a.id < b.id ? 1 : -1);
            console.log(this.todoList);
        },
        sort3() {
            console.log('sort 2 called')
            this.todoList = this.todoList.sort((a, b) => b.id < a.id ? 1 : -1);
            console.log(this.todoList);
        }
    },
    components: {
        "todo-item": todoItem,
    },
})

app.mount('#app');



/*fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => (this.todoList = json))*/


/*создание компонента глобально
const app = Vue.createApp({});

app.component("counter", 
{
    data(){
        return{
            count: 0,
        }
    },
    methods: {
        increase(){
            this.count++;
        },
        decrease(){
            this.count--;
        },
        addMess(){
            console.log(this.count);
        }
    },
    template: `
        <h2> Счетчик </h2>
        <p> {{ count }} </p>
        <button v-on:click="increase"> Увеличить</button>
        <button v-on:click="decrease"> Уменьшить</button>
        <button v-on:click="addMess"> Вывод</button>
    `,
});
app.mount("#app");*/

