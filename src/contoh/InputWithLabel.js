const InputWithLabel =(id,label,value,type="text",onInputChange) => {

    return (
        <>
            <label htmlfor={id}>{label}</label>
            <input id={id} type={type} value={value} onchange={onInputChange}></input>
        </>
    )
}

export default InputWithLabel