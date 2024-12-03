import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ColorContextProvider } from './ColorContext/darkContext';
// import Detail from './Pages/Detail/Detail';
// import Lists from './Pages/Lists/Lists';
// import Login from './Pages/Login/Login';
// import PageNotFound from './Pages/NotFound';

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />,
//         errorElement: <PageNotFound />,
//     },
//     {
//         path: '/login',
//         element: <Login />,
//         errorElement: <PageNotFound />,
//     },
//     {
//         path: 'users',
//         element: <Lists />,
//         errorElement: <PageNotFound />,
//     },
//     {
//         path: 'user/:userId',
//         element: <Detail />,
//         errorElement: <PageNotFound />,
//     },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ColorContextProvider>
            <App />
        </ColorContextProvider>
    </React.StrictMode>
);
