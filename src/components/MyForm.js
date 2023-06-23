import { useState } from "react";

function MyForm(promps){

    const [flavor, setflavor] = useState("coconut");

    const handleChange = (event) =>{
        setflavor(event.target.value);
    }
    
    const handleSubmit = (event) =>{
        alert(`Saya pilih : ${flavor}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Pilih flavor:</label>
            <select value={flavor} onChange={handleChange}>
                            <option value="grapefruit">Grape fruit</option>
                            <option value="Lime">lime</option>
                            <option value="coconut">coconut</option>
                            <option value="manggo">mangga</option>
            </select>
            <input type="submit" value="kiriman"/>
        </form>
    )

}

export default MyForm;