import { createSlice } from "@reduxjs/toolkit"

const counterStore = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        // +1
        increaseCount1(state){
            state.count++
        },
        // -1
        decreaseCount1(state){
            state.count--
        },
        // 0
        clearCount(state){
            state.count = 0
        },
        // set as xx
        setCount(state, action){
            state.count = action.payload
        }
    }
})

const {increaseCount1, decreaseCount1, clearCount, setCount} = counterStore.actions
const reducer = counterStore.reducer

export {increaseCount1, decreaseCount1, clearCount, setCount}
export default reducer