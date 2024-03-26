import { configureStore } from '@reduxjs/toolkit';

import counterStore from './module/counterStore';

const myStore = configureStore({
    reducer: {
        counter: counterStore
    }
})

export default myStore