import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { useTranslation } from 'react-i18next';
import getTranslations from './utils/getTranslations';

import Home from "./components/Home";
import Login from "./components/Login";
import Browse from "./components/Browse";

import appStore from "./utils/appStore";

const App = () => {
  
  const { t } = useTranslation();
  const greeting = t("greeting");
  const { line1, line2 } = t("description")

  console.log(greeting, line1, line2);
  
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