import "./Repositorios.css";
import CardRepo from "./subcomponets/CardRepo";
import { useEffect, useState } from "react";
import axios from "axios";
type Props = {
    name: string;
    bio: string;
    repoUrl: string;
};
const Repositorios = ({ name, bio, repoUrl }: Props) => {
    const [repos, setRepos] = useState([]);
    const [page, setPage] = useState(4);
    useEffect(() => {
        async function fetchRepo() {
            try {
                const res = await axios.get(repoUrl, {
                    params: { per_page: page },
                });

                console.log(res.data);
                setRepos(res.data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchRepo();
        console.log(repos);
    }, [repoUrl, page]);
    return (
        <section className="repos">
            <div className="title">
                <h1>{name}</h1>
                <p>{bio}</p>
            </div>
            <div className="repos-cards">
                <div className="repos-cards">
                    {repos.map((repo) => (
                        <CardRepo key={repo.id} info={repo} />
                    ))}
                </div>
            </div>
            <button
                className="view-all"
                onClick={() => {
                    setPage(page + 4);
                }}
            >
                View all repositories
            </button>
        </section>
    );
};
export default Repositorios;
