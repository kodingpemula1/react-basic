import { useState } from "react";


const MotorBike = () => {
    const [brand,setBrand] = useState ("Yamaha");

    const handleChange = () =>{
        setBrand("suzuki");
    }
    

    return (
        <div>
        <h2>{brand}</h2>
        <button onClick={()=>handleChange()}>Ganti Merk</button>
        </div>
    )
}

export default MotorBike;