import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/Home";
import Login from "./components/Login";
import Browse from "./components/Browse";

import appStore from "./utils/appStore";

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

    <Provider store={appStore}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
    
  );
}

export default App;