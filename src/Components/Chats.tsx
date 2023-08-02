import Chip from "./Chip"

function Chats(){
    return (
        <nav className="text-white p-5 bg-amber-50 flex flex-col gap-5">
            <Chip 
            name={"Optimus Prime"}
            online={true}
            img={"https://duet-cdn.vox-cdn.com/thumbor/0x0:2747x1190/828x552/filters:focal(1322x723:1323x724):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24630826/Screen_Shot_2023_05_03_at_3.32.38_PM.png"}
            />
            <Chip 
            name={"Jesus Christ"}
            online={false}
            img={"https://m.media-amazon.com/images/I/816Etq5qEwL._AC_UF894,1000_QL80_.jpg"}
            />
        </nav>
    )
}

export default Chats