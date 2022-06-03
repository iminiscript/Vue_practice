const app = Vue.createApp({
    data() {
        return {
            goals: [],
            enterValue: "",
        };
    },
    methods: {
        addGoals() {
            this.goals.push({
                label: this.enterValue,
            });
            this.enterValue = "";
            console.log(this.goals);

            // this.items.push({
            //     id: this.items.length + 1,
            //     label: this.newItem,
            //     highPriority: this.highPriority,
            // });
            // this.newItem = "";
            // this.highPriority = false;
        },
        removeGoal(idx) {
            this.goals.splice(idx, 1);
        },
        togglePurchased(idx) {
            idx.completed = !idx.completed;
            console.log(idx);
        },
    },
});

app.mount("#app");
