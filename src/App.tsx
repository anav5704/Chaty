import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "./Layout/Root"
import Login from "./Components/Login"

function App() {

  const Bots = ["Prime", "Jesus"]

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <Root /> }>
        <Route index element={ <Login /> }/>
        <Route path="chat">
            { Bots.map( bot => <Route path={bot} />)}
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={ router } />
  )
}

export default App
