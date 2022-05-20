export default {
  state: {
    /************** Todo Tasks ************/
    tasks: [
      {
        id: 1,
        title: "code",
        description: "do refilex task for Todo application",
        status: "todo",
      },
      {
        id: 2,
        title: "solve",
        description: "solve Leetcode problem ",
        status: "todo",
      },
      {
        id: 3,
        title: "train",
        description: "go to train",
        status: "todo",
      },

      /************** In Progress Tasks ************/

      {
        id: 4,
        title: "code in progress",
        description: "do refilex task for Todo application",
        status: "inProgress",
      },
      {
        id: 5,
        title: "solve in progress",
        description: "solve Leetcode problem ",
        status: "inProgress",
      },
      {
        id: 6,
        title: "train in progress",
        description: "go to train",
        status: "inProgress",
      },

      /************** Done Tasks ************/

      {
        id: 7,
        title: "code done",
        description: "do refilex task for Todo application",
        status: "done",
      },
      {
        id: 8,
        title: "solve done",
        description: "solve Leetcode problem ",
        status: "done",
      },
      {
        id: 9,
        title: "train done",
        description: "go to train",
        status: "done",
      },
    ],
    movingTask: {},
  },
  actions: {
    // set one task to store the moving task
    setMovingTask({ commit }, task) {
      commit("setMovingTask", task);
    },
    // add new task
    addNewTask({ commit }, newTask) {
      commit("addNewTask", newTask);
    },
  },
  mutations: {
    setMovingTask: (state, task) => (state.movingTask = task),
    addNewTask: (state, newTask) => {
      newTask = { ...newTask, id: state.tasks.at(-1).id + 1, status: "todo" };
      state.tasks.push(newTask);
    },
  },
  getters: {
    // todoTasks getters
    getTodoTasks: (state) =>
      state.tasks.filter((task) => task.status == "todo"),
    // inProgressTasks getters
    getInProgressTasks: (state) =>
      state.tasks.filter((task) => task.status == "inProgress"),
    // doneTasks getters
    getDoneTasks: (state) =>
      state.tasks.filter((task) => task.status == "done"),
    // return moved task data
    getMovedTask: (state) => state.movingTask,
  },
};
