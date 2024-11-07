import './App.css'
import { Poll } from './Poll'

export default function Wrapper() {
    return (
        <Poll />
        // <div>
        //     <CardWrapper>
        //         <TextComponent />
        //     </CardWrapper>
        //     <CardWrapper>
        //         <ButtonComponent />
        //         <ButtonComponent />
        //     </CardWrapper>
        // </div>
    )
}

function TextComponent() {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>Click</button>
        </div>
    )
}

function ButtonComponent() {
    return (
        <div>
            <div>
            <button>btn1</button>
            </div>
            <div>
            <button>btn2</button>
            </div>
            <div>
            <button>btn3</button>
            </div>
        </div>
    )
}

function CardWrapper({children}) {
    console.log(children)
    return (
        <div style={{border: "2px solid", margin: "15px", boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.2)"}}>
            {children}
        </div>
    )
}