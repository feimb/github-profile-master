import "./SuggestionBoxItem.css";

type Props = {
    img: string,
    name: string,
    onSelect: () => void
}
const SuggestionBoxItem = ({ img,name, onSelect}:Props) => {


    return (
        <li className="suggestion-box-item" onMouseDown={onSelect}>
            {/* onMouseDown={onClick} */}
            <img
                src={img}
            />
            <div className="suggestion-box-item--text">
                <h2>{name}</h2>
            </div>
        </li>
    );
};
export default SuggestionBoxItem;
