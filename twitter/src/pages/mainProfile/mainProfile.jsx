import './mainProfile.css'

import React from 'react'
import langData from '../../localization/data'
import { Context } from '../../context/localization'
import { ThemeContext } from '../../context/theme'
import { useParams, useNavigate } from 'react-router-dom'



import Arrow from '../../libs/images/Arrow.png'
import Hero from '../../libs/images/Hero.png'
import Photo from '../../libs/images/photo.png'


function MainProfile() {
    const { state, setState } = React.useContext(Context)
    const { theme } = React.useContext(ThemeContext)

    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = React.useState({});
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://reqres.in/api/users/' + id)
            .then((response) => response.json())
            .then((data) => {
                setUser(data?.data);
            });
    }, [id]);


    return (
        <div id="mainprofile-wrapper" className={theme === 'light' ? 'light' : 'dark'}>
            <div className="topbar">
                <button className="topbar__arrow" onClick={() => navigate(-1)} >
                    <img src={Arrow} alt="" />
                </button>
                <div className="topbar__profile">
                    <p className='topbar__name'>
                        <b>
                            {user.first_name}
                        </b>
                    </p>
                    <p className='topbar__followers'>1,070 {langData[state].profile.tweets}</p>
                </div>
            </div>
            <div className="hero">
                <img src={Hero} alt="" />
            </div>
            <div className="photo">
                <img src={user.avatar} alt="" />
            </div>
            <div className="profile">
                <div className="profile__user">
                    <div className="user__name">{user.first_name}</div>
                    <div className="user__username">{'@' + user.first_name + '_' + user.last_name}</div>
                </div>
                <div className="work">UX@UI designer at <a className="userlink" href=''>@abutechuz</a></div>
                <ul className="more">
                    <li className='more__location'>
                        <a href="">Mashag'daman</a>
                    </li>
                    <li className='more__tg'>
                        <a href="" className='userlink'>t.me/boburjon_mavlonov</a>
                    </li>
                    <li className='more__birthday'>Born November 24, 200</li>
                    <li className='more__joined'>Joined May 2020</li>
                </ul>
                <div className="follow">
                    <p className="following">67 <span className="ff">{langData[state].profile.following}</span> </p>
                    <p className='followers'>47 <span className="ff">{langData[state].profile.follower}</span></p>
                </div>
                <ul className="options">
                    <li><button>{langData[state].profile.tweets}</button></li>
                    <li><button>{langData[state].profile.tweetsReplies}</button></li>
                    <li><button>{langData[state].profile.media}</button></li>
                    <li><button>{langData[state].profile.likes}</button></li>
                </ul>
            </div>
        </div >

    )
}

export default MainProfile;