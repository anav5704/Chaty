function ChatForm(){
    return (
        <div className="h-full w-full text-neutral-200 p-3 flex flex-col gap-3">
            <div className="h-90v bg-neutral-800 rounded-md">
            </div>
          <div className="flex items-center gap-3">
            <input type="text" value=""  className="bg-neutral-800 caret-violet-500  rounded-md w-full h-10v focus:outline-none py-2 px-3"/>
            <div className="text-neutral-900 bg-violet-500 p-2 rounded-md cursor-pointer aspect-square h-10v grid place-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </div>
          </div>
        </div>
    )
}

export default ChatForm