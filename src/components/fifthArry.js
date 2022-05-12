function FifthArry(props){
    return(
        <div className="edit">
            {/* <h1>{props.title}</h1>
            <h2>{props.price}</h2>
            <h2>{props.Quantity}</h2>
            <h3>{props.Size}</h3>
            <h3>{props.Description}</h3> */}
            
            <div>

            <img className="imgsize" src="https://wallpaperaccess.com/full/2959600.jpg" />
            </div>
            <button onClick={props.action} className="btn">AddToCart</button>
            
            
        </div>
    )
}
export  {FifthArry}