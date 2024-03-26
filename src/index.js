import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import myStore from './store';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './page/Navibar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={myStore}>
        <Navibar></Navibar>
        <RouterProvider router={router}>
        </RouterProvider>
    </Provider>
);
