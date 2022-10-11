import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Error from './component/error/Error';
import Home from './component/Home/Home';
import Main from './component/main/Main';
const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/blog',
          element:<Blog></Blog>
        },
      {
        path:'/home',
        element:<Home></Home>,
        loader:async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz/");
        },
      },
      {
        path:'/about',
        element:<About></About>
      }
      ]
    },

    {
      path:"*",
      element:<Error></Error>
    }
])
function App() {
  return (
    <div className="App">
         <RouterProvider router={router} >
      
          </RouterProvider> 
          
    </div>
  );
}

export default App;
