import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Browse from "./components/Browse";

const App = () => {
  
  const appRouter = createBrowserRouter([
    
    {
        path: "/",
        element:<Home />,
    },

    {
        path: "/login", 
        element: <Login />
    },

    {
        path: "/browse",
        element: <Browse />
    },

  ]);
  
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;