import { useState } from "react"
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai"

export default function SingleQuestion({info, title}) {
    const [show, setShow] = useState(false)
    return(
        <>
            <div className="d-flex justify-content-between quest-div">
                <h5>{title}</h5>
                <button className="btn text-danger" onClick={() => setShow(!show)}>
                    { show ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            { show && info}
        </> 
    )
}