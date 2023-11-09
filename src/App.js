// import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Counter from "./components/Counter";
import Home from "./components/Home";
// import Todo, { Nested1, Nested2 } from "./components/Todo";
import Todo from "./components/Todo";
import NotFound from "./components/NotFound";
import Ids from "./components/Ids";
import ReduxToolKit from "./components/ReduxToolPractice";
import ApiCallUsingRedux from "./components/ApiCallUsingRedux";
import ErrorBoundary from "./components/ErrorBoundary";

// -----------------------Context Handling --------------------------
// export const context = createContext();
// console.log("context", context);
// ------------------------------------------------------------

const App = () => {
  // const [co, setCo] = useState(0);

  return (
    // <context.Provider value={{ co, setCo }}>
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="counter" element={<Counter />} />
            <Route path="todo" element={<Todo />} />
            {/* <Route path="/:id" element={<Ids />} /> */}
            <Route path="/id" element={<Ids />} />
            <Route path="/redux" element={<ReduxToolKit />} />
            <Route path="/apicall" element={<ApiCallUsingRedux />} />
            {/* Nested Routing */}
            {/* <Route path="todo" element={<Todo />}>
            <Route path="nested1" element={<Nested1 />} />
            <Route path="nested2" element={<Nested2 />} />
          </Route> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
    // </context.Provider>
  );
};

export default App;
