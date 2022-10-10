import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Main from './component/main/Main';
const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
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
