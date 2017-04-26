
import * as types from './mutations-types'


const actions = {
    addCount: function({ commit }){
        commit(types.ADD_COUNT)
    }
}

export default actions 