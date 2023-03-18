import Vuex from 'vuex'
import movie from './modules/movie'

const createStore = () => {
    return new Vuex.Store({
        modules: {
            movie
        },
    })
};

export default createStore;
