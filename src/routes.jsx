import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Context from './pages/Context.jsx';
import Hook from './pages/Hook.jsx';
import Memo from './pages/Memo.jsx';
import Reducer from './pages/Reducer.jsx';
import Todos from "./pages/Todos.jsx";
import DynamicTodo from "./pages/DynamicTodo.jsx";
import Counter from "./pages/Counter.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {

      }
    ]
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/context",
    element: <Context />
  },
  {
    path: "/hook",
    element: <Hook />
  },
  {
    path: "/memo",
    element: <Memo />
  },
  {
    path: "/reducer",
    element: <Reducer />
  },
  {
    path: "/todos",
    element: <Todos />
  },
  {
    path: "/todos/:todoId",
    element: <DynamicTodo />
  },
  {
    path: "/men",
    element: <Todos />,
    children: [
      {
        path: "shirt",
        element: <Hook />
      },
      {
        path: "pant",
        element: <Context />
      },
    ]
  },
  {
    path: "/men/shirt/:productId",
    element: <DynamicTodo />
  },
  {
    path: "/men/pant/:productId",
    element: <DynamicTodo />
  },
  {
    path: "/female/sharee/:productId",
    element: <DynamicTodo />
  },
  {
    path: "/counter",
    element: <Counter />
  },
]);