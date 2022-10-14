import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginBootstrap from './Components/LoginBootstrap';
import Main from './Components/Main/Main';
import ResisterReactBootstrap from './Components/ResisterReactBootstrap';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <ResisterReactBootstrap></ResisterReactBootstrap>
      },
      {
        path: '/resister',
        element: <ResisterReactBootstrap></ResisterReactBootstrap>
      },
      {
        path: '/login',
        element: <LoginBootstrap></LoginBootstrap>
      }
    ]
  }
])

function App() {
  

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
