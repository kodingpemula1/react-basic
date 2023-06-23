
const SimpleCard =({gambar,title,description}) =>{

    return (
        <>
        <img class="Card-img-top" src={gambar} alt="card image cap"/>
        <h2>{title}</h2>
        <p>{description}</p>
        </>
    )
}

export default SimpleCard;