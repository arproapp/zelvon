export const state = {
    tareas: [],
    tarea: {
        firstname: "",
        lastname: "",
        company: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
    },
};

export const getters = {

};

export const mutations = {
    set(state, payload) {
        state.tareas.push(payload)
    }
};

export const actions = {
    setTareas({ commit }, tarea) {
        commit('set', tarea)
    }
};