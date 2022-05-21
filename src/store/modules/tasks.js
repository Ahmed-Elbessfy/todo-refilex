export default {
  state: {
    tasks: [],
    movingTask: {},
  },
  actions: {
    //initiate state: get from local storage
    initiateStore({ commit }) {
      commit("initiateStore");
    },
    // set one task to store the moving task
    setMovingTask({ commit }, task) {
      commit("setMovingTask", task);
    },
    // add new task
    addNewTask({ commit }, newTask) {
      commit("addNewTask", newTask);
    },
    // set Local storage to store current updated state in local storage
    setLocalStorage({ commit }) {
      commit("setLocalStorage");
    },
    // set Edited task
    setEditedTask({ commit }, task) {
      commit("setEditedTask", task);
    },
  },
  mutations: {
    initiateStore: (state) => {
      // get tasks from local storage
      const localStorageTasks = localStorage.getItem("tasks");
      // if there are tasks at local Storage, save it at state
      if (localStorageTasks) {
        state.tasks = JSON.parse(localStorageTasks);
      }
    },
    setMovingTask: (state, task) => {
      state.movingTask = task;
    },
    addNewTask: (state, newTask) => {
      newTask = {
        ...newTask,
        id: Math.floor(Math.random() * 10000),
        status: "todo",
      };
      state.tasks.push(newTask);
      // store new task at local storage
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setLocalStorage: (state) =>
      localStorage.setItem("tasks", JSON.stringify(state.tasks)),
    setEditedTask: (state, task) => {
      // find edited task index to replace it
      let taskIdx = state.tasks.indexOf(task);
      // replace task previous version with the new edited one
      state.tasks.splice(taskIdx, 1, task);
      // store new tasks at local storage
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
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
