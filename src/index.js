import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root, { rootLoader } from "./routes/root";
import Team, { teamLoader } from "./routes/team";

import HomePage from './components/Homepage';
import Lesson1 from './pages/Lesson1';
import Lesson2 from './pages/Lesson2';
import Lesson3 from './pages/Lesson3';
import Lesson4 from './pages/Lesson4';
import Lesson5 from './pages/Lesson5';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },

  {
    path: "/c/*",
    element: <App />,
  },
  {
    path: "/Homepage",
    element: <HomePage />,
  },
  {
    path: "/Lesson1",
    element: <Lesson1 />,
  },
  {
    path: "/Lesson2",
    element: <Lesson2 />,
  },
  {
    path: "/Lesson3",
    element: <Lesson3 />,
  },
  {
    path: "/Lesson4",
    element: <Lesson4 />,
  },
  {
    path: "/Lesson5",
    element: <Lesson5 />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
