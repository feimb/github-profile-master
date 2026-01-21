import "./CardInfo.css"
type Props = {
    name: String;
    content: String;
}
const CardInfo = ({name, content}:Props) =>(
    <div className="card">
        <span className="card-name">{name}</span>
        <div className="bar"></div>
        <span className="card-content">{content}</span>
    </div>
)

export default CardInfo;