import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Router/Router';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router}/>
      <ToastContainer/>
    </div>
  );
}

export default App;



// main.jsx code

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )