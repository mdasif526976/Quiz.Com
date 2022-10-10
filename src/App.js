import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './component/main/Main';
import Navbar from './component/navbar/Navbar';
const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>
    }
])
function App() {
  return (
    <div className="App">
         <RouterProvider router={router} >
         <h1>adhudhu</h1>
          <Navbar></Navbar>
          </RouterProvider> 
          
    </div>
  );
}

export default App;
