export default {
  state: {
    /************** Todo Tasks ************/
    todo: [
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
    ],
    /************** In Progress Tasks ************/
    inProgress: [
      {
        id: 1,
        title: "code in progress",
        description: "do refilex task for Todo application",
        status: "todo",
      },
      {
        id: 2,
        title: "solve in progress",
        description: "solve Leetcode problem ",
        status: "todo",
      },
      {
        id: 3,
        title: "train in progress",
        description: "go to train",
        status: "todo",
      },
    ],
    /************** Done Tasks ************/
    done: [
      {
        id: 1,
        title: "code done",
        description: "do refilex task for Todo application",
        status: "todo",
      },
      {
        id: 2,
        title: "solve done",
        description: "solve Leetcode problem ",
        status: "todo",
      },
      {
        id: 3,
        title: "train done",
        description: "go to train",
        status: "todo",
      },
    ],
  },
  actions: {},
  mutations: {},
  getters: {
    // todoTasks getters
    getTodoTasks: (state) => state.todo,
    // inProgressTasks getters
    getInProgressTasks: (state) => state.inProgress,
    // doneTasks getters
    getDoneTasks: (state) => state.done,
  },
};
