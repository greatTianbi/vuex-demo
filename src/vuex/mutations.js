
import * as types from './mutations-types'

const mutations = {
    [types.ADD_COUNT] ( state ) {
        state.count += 1
    }
}

export default mutations