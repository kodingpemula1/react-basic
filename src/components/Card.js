import benz from './img/benz.jpg';
import gclass from './img/gclass.jpg';

function Card(){
    
    const productList =[
        {
            title: "GL Glass",
            description: "This is our product",
            year:2022,
            img: benz
        },
        {
            title: "G Glass",
            description: "this is our product",
            year:2023,
            img: gclass
        }
    ];

    return (
        productList.map ((item) => {
            return (
                <div className="card" style={{width: "14rem", margin: "10px"}}>
                    <img class="Card-img-top" src={item.img} alt="card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.description}</p>
                        <p class="card-text">{item.description}</p>
                        <p>
                            <span>{item.year > 2020 ? "New" : "Stock Sale"}</span>
                        </p>
                        <a href="#" className="btn btn-primary">Details</a>

                    </div>
                </div>              
            )
        })
    );
    }

export default Card;