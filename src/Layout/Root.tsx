import { Outlet} from "react-router-dom"
import Chats from "../Components/Chats"


function Root(){
    return (
        <main className="flex bg-amber-50 h-screen w-screen">
            <Chats />
            <Outlet />
        </main>
    )
}

export default Root