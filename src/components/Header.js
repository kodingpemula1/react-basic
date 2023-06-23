import Description from "./Description"
import Title from "./Title"
import UserProfile from "./UserProfil"

const Header = (props) => {

    return (
        <>
        
            <Title appTitle2={props.appTitle1}/>
            <Description>
                <p>Pusat belajar koding dan robotic</p>
                <p>Technology</p>
            </Description>
            <UserProfile/>
        </>
    )
}

export default Header;