function ForthArry(props){
    return(
        <div className="edit">
            {/* <h1>{props.title}</h1>
            <h2>{props.price}</h2>
            <h2>{props.Quantity}</h2>
            <h3>{props.Size}</h3>
            <h3>{props.Description}</h3> */}
            
            <div>

            <img className="imgsize" src="https://c4.wallpaperflare.com/wallpaper/168/21/261/mercedes-amg-gt-r-edo-competition-2018-4k-wallpaper-preview.jpg" />
            </div>
            <button onClick={props.action} className="btn">AddToCart</button>
            
            
        </div>
    )
}
export  {ForthArry}