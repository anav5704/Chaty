import "../index.css"

function Chip({ name, img, online}: any){
    return (
        <div className="flex items-center p-2 rounded-md bg-slate-800">
            <div className={`relative ${online ? "online" : "offline"} `}>
                <img className="h-10 w-10 object-cover object-center rounded-full overflow-hidden" src={ img } alt="" />
            </div>
            <p className="ml-5">{ name }</p>
        </div>
    )
}

export default Chip