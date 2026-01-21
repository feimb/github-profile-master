import "./SuggestionBox.css";
import SuggestionBoxItem from "./SuggestionBoxItem";
type GithubUser = {
    id: number;
    login: string;
    avatar_url: string;
};
type Props = {
    suggestion: GithubUser[];
    inactive: boolean;
    onSelectUser: (username: string) => void;
};
const SuggestionBox = ({ suggestion, inactive, onSelectUser }: Props) => {
    return (
        <div className={`suggestion-box ${!inactive ? "inactive" : ""}`}>
            <ul>
                {suggestion.map((user) => (
                    <SuggestionBoxItem
                        img={user.avatar_url}
                        name={user.login}
                        key={user.id}
                        onSelect={() => onSelectUser(user.login)}
                    />
                ))}
            </ul>
        </div>
    );
};
export default SuggestionBox;
