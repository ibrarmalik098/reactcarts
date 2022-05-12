function Arry(props){
    return(
        <div className="edit">
            {/* <h1>{props.title}</h1>
            <h2>{props.price}</h2>
            <h2>{props.Quantity}</h2>
            <h3>{props.Size}</h3>
            <h3>{props.Description}</h3> */}
            
            <div>

            <img className="imgsize" src="https://thumbs.dreamstime.com/z/yellow-color-audi-r-expensive-super-sports-car-close-up-front-view-presented-motor-expo-nonthaburi-thailand-thailand-dec-yellow-145836542.jpg" />
            </div>
            <button onClick={props.action} className="btn">AddToCart</button>
            
            
        </div>
    )
}
export  {Arry}