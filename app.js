const shoppingListApp = Vue.createApp({
    data() {
        return {
            header: "Todo App",
            cancling: false,
            newItem: "",
            highPriority: false,
            items: [
                // {
                //     id: 1,
                //     label: "10 party hats",
                //     completed: true,
                //     highPriority: false,
                // },
                // {
                //     id: 2,
                //     label: "2 board games",
                //     completed: true,
                //     highPriority: false,
                // },
                // {
                //     id: 3,
                //     label: "20 cups",
                //     completed: false,
                //     highPriority: true,
                // },
            ],
        };
    },
    computed: {
        reversedItems() {
            return this.items.reverse();
        },
    },
    methods: {
        addTodo() {
            if (this.newItem == "") {
                alert("Please enter an Value");
            } else {
                this.items.push({
                    id: this.items.length + 1,
                    label: this.newItem,
                    highPriority: this.highPriority,
                });
                this.newItem = "";
                this.highPriority = false;
            }
        },
        doCancle(cancling) {
            this.cancling = cancling;
            this.newItem = "";
            this.highPriority = false;
        },
        togglePurchased(item) {
            item.completed = !item.completed;
            console.log(item);
        },
        removeItem(item) {
            //this.items.splice(item, 1);
            console.log(item.id);
            this.items = this.items.filter((newArry) => newArry.id !== item.id);
        },
    },
}).mount("#app");
