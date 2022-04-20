import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from '../pages/config'

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default RouterProvider