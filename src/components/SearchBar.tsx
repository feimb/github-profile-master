import "./SearchBar.css";
import React from "react";
import { useState, useEffect } from "react";
import axios, { type AxiosResponse } from "axios";
import SuggestionBox from "./subcomponets/SuggestionBox";
type Props = {
    setUsername: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ setUsername }: Props) => {
    const [isActive, setIsActive] = useState(false);
    const [userSearch, setUserSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        if (userSearch.length < 3) {
            setSuggestions([]);
            return;
        }

        const fetchUsers = async () => {
            try {
                const res = await axios.get(
                    "https://api.github.com/search/users",
                    {
                        params: { q: userSearch, per_page: 5 },
                    },
                );


                setSuggestions(res.data.items ?? []);
            } catch (err) {
                console.error(err);
                setSuggestions([]);
            }
        };

        fetchUsers();
    }, [userSearch]);
    return (
        <nav>
            <label htmlFor="searchBar">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="11"
                        cy="11"
                        r="7"
                        stroke="#CDD5E0"
                        stroke-width="2"
                    />
                    <path
                        d="M20 20L17 17"
                        stroke="#CDD5E0"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                </svg>
            </label>
            <input
                type="text"
                id="searchBar"
                placeholder="username"
                onChange={(e) => {
                    setUserSearch(e.target.value);
                }}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
            />
            <SuggestionBox
                suggestion={suggestions}
                inactive={isActive}
                onSelectUser={(username:string) => {
                    setUsername(username);
                    setIsActive(false);
                    
                }}
            />
        </nav>
    );
};

export default SearchBar;
