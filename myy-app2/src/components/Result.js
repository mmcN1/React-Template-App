import { useState } from "react";
import NavBar from "./navbar/Navbar"
import Template1 from "./navbar/Template1";
import Template2 from "./navbar/Template2";

const Result = () => {
    const [selectedPaint ,setSelectedPaint] = useState('')
    const [selectedColor, setSelectedColor] = useState('');
    const [active, setActive] = useState(null)


    return (
        <div>
            <NavBar selectedColor={selectedColor} setSelectedColor={setSelectedColor} active={active} setActive={setActive} selectedPaint={selectedPaint} setSelectedPaint={setSelectedPaint} />
            {active === 'firstTemp' && <Template1 selectedColor={selectedColor} setSelectedColor={setSelectedColor} selectedPaint={selectedPaint} setSelectedPaint={setSelectedPaint} />}
            {active === 'secondTemp' && <Template2 selectedColor={selectedColor} setSelectedColor={setSelectedColor} selectedPaint={selectedPaint} setSelectedPaint={setSelectedPaint} />}
        </div>
    )
}

export default Result;