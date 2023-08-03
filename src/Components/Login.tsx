import { useNavigate } from "react-router-dom"

function Login(){
    const nav = useNavigate()
    function login(){
        sessionStorage.setItem("user", "true")
        nav("/chat")
    }

    return(
       <div className="w-full h-full grid place-content-center">
         <button onClick={() => login()} className="py-2 px-5 rounded-md bg-neutral-400 font-semibold">Log In</button>
       </div>
    )
}

export default Login