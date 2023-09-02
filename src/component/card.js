import bg from '../Images/bg.jpg'
function Card(props){
    return(
        <div className="child">
        <img src={props.img}></img>
        <p>{props.name}</p>
        <small>{props.population}</small>
        </div>
    )
}
export default Card;