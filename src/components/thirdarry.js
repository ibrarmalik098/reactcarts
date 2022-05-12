function ThirdArry(props){
    return(
        <div className="edit">
            {/* <h1>{props.title}</h1>
            <h2>{props.price}</h2>
            <h2>{props.Quantity}</h2>
            <h3>{props.Size}</h3>
            <h3>{props.Description}</h3> */}
            
            <div>

            <img className="imgsize" src="https://images.unsplash.com/photo-1614026480209-cd9934144671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" />
            </div>
            <button onClick={props.action} className="btn">AddToCart</button>
            
            
        </div>
    )
}
export  {ThirdArry}