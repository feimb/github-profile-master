import "./PerfilInformation.css"
import CardInfo from "./subcomponets/CardInfo";
type Props = {
    avatar: string;
    followers:String;
    following:String;
    location:String;
}
const PerfilInformation = ({ avatar,followers, following, location}:Props) => (  
    <section className="perfilInformation">
        <img src={avatar} alt="" />
        <div className="info-cards">
            <CardInfo name="Followers" content={followers}/> 
            <CardInfo name="Following" content={following}/>
            <CardInfo name="Location" content={location === null ? " " : location}/>
        </div>
    </section>

)
export default PerfilInformation;