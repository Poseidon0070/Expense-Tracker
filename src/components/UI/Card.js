import "./Card.css"
function Card(props){
    const customClass = 'Card ' + props.className;
    return (
        <div className={customClass}>{props.children}</div>
    )
}

export default Card;