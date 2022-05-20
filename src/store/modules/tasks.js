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
        id: 1,
        title: "code in progress",
        description: "do refilex task for Todo application",
        status: "inProgress",
      },
      {
        id: 2,
        title: "solve in progress",
        description: "solve Leetcode problem ",
        status: "inProgress",
      },
      {
        id: 3,
        title: "train in progress",
        description: "go to train",
        status: "inProgress",
      },

      /************** Done Tasks ************/

      {
        id: 1,
        title: "code done",
        description: "do refilex task for Todo application",
        status: "done",
      },
      {
        id: 2,
        title: "solve done",
        description: "solve Leetcode problem ",
        status: "done",
      },
      {
        id: 3,
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
  },
  mutations: {
    setMovingTask: (state, task) => (state.movingTask = task),
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
