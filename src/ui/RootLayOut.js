import { Outlet } from "react-router"
import Header from "../components/Header"


const RootLayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />

    </div>
  )
}
export default RootLayOut