import { useEffect, useState } from "react";
import "./App.css";
import PerfilInformation from "./components/PerfilInformation";
import SearchBar from "./components/SearchBar";
import Repositorios from "./components/Repositorios";
import axios from "axios";
function App() {
    const [username, setUsername] = useState<string>("");
    const [userSearched, setUserSearched] = useState({});
    useEffect(() => {
        if (username.length < 3) return;
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `https://api.github.com/users/${username}`,
                );
                setUserSearched(res.data);
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, [username]);
    return (
        <>
            {/* header */}
            <SearchBar setUsername={setUsername} />
            {/* perfil information   */}
            <PerfilInformation
                avatar={userSearched.avatar_url}
                followers={userSearched.followers}
                following={userSearched.following}
                location={userSearched.location}
            />
            {/* repositorios */}
            <Repositorios
                name={userSearched.name}
                bio={userSearched.bio}
                repoUrl={userSearched.repos_url}
            />
        </>
    );
}

export default App;
