 import Chip from "./Chip"
import { NavLink } from "react-router-dom"
import { useState , useEffect} from "react"

function Chats(){

    const [user, setUser]  = useState(false)
    useEffect(() => {
        sessionStorage.getItem("user") ? setUser(true) : setUser(false)
    }, [])

    return (
    user ? 
     <div className="flex flex-col gap-3 p-3 pr-0 min-w-fit ">
     <div className="text-neutral-900 text-xl font-bold bg-violet-500 p-2 rounded-md h-10v grid place-content-center">
        <a target="_blank" href="https://github.com/anav5704">
            <p className="p-2">Chaty by Anav</p>
        </a>
     </div>
      <nav className="text-white p-3 bg-neutral-800 flex flex-col gap-3  rounded-md h-full">
           <NavLink to="/chat/Prime">
            <Chip 
                name={"Optimus Prime"}
                online={true}
                img={"https://duet-cdn.vox-cdn.com/thumbor/0x0:2747x1190/828x552/filters:focal(1322x723:1323x724):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24630826/Screen_Shot_2023_05_03_at_3.32.38_PM.png"}
                />
           </NavLink>
            <NavLink to="/chat/Jesus">
                <Chip 
                name={"Jesus Christ"}
                online={false}
                img={"https://m.media-amazon.com/images/I/816Etq5qEwL._AC_UF894,1000_QL80_.jpg"}
                />
            </NavLink>
        </nav> 
     </div>
        : null 
    )
}
export default Chats