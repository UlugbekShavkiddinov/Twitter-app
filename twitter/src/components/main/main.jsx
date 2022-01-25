import React from "react";

import './main.css'

import Header from "../header/header";

// img

import vector from '../.././libs/images/Vector.png';
import gif from '../../libs/images/gif.png';
import chart from '../../libs/images/chart.png';
import smile from '../../libs/images/smile.png';
import data from '../../libs/images/schedule.png';
import comment from '../../libs/images/comment.png';
import like from '../../libs/images/like.png';
import retweet from '../../libs/images/retweet.png';
import share from '../../libs/images/share.png';
import statistics from '../../libs/images/statistics.png';


import langData from '../../localization/data'
import { Context } from '../../context/localization'
import { ThemeContext } from '../../context/theme'
import { NavLink } from 'react-router-dom'


function Main() {
    const { state, } = React.useContext(Context);
    const { theme } = React.useContext(ThemeContext);

    const [users, setUsers] = React.useState({});
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://reqres.in/api/users');
                const data = await response.json();

                if (data?.data?.length > 0) {
                    setUsers([...data.data]);
                }
            } catch (err) {
                console.log(err);
            }
        })();
    }, [])



    return (
        <div id="main-theme" className={theme === 'light' ? 'light' : 'dark'}>
            <div className="main-section">
                <Header />
                <div className="main-wrapper">

                    <div className="write-comment">
                        <div>
                            <input type="text" className="write__input" placeholder={langData[state].main.placeholder} />
                            <ul className="write__details">
                                <li>
                                    <button>
                                        <img src={vector} />
                                    </button>

                                </li>
                                <li>
                                    <button>
                                        <img src={gif} />
                                    </button>

                                </li>
                                <li>
                                    <button>
                                        <img src={chart} />
                                    </button>

                                </li>
                                <li>
                                    <button>
                                        <img src={smile} />
                                    </button>

                                </li>
                                <li>
                                    <button>
                                        <img src={data} />
                                    </button>

                                </li>
                            </ul>
                        </div>

                        <button className="main-btn">{langData[state].main.btn}</button>
                    </div>
                    <div className="section"></div>

                    <div >
                        {users.length > 0 &&
                            users.map((user) => (
                                <div className="comments">
                                    <NavLink to={'/profile/' + user.id}>
                                        <div className="comments__img">
                                            <img src={user.avatar} alt="" />
                                        </div>
                                    </NavLink>


                                    <div className="comments__text">
                                        <div className="comments__names">
                                            <NavLink to={'/profile/' + user.id}>
                                                <p className="comments__name">
                                                    {user.first_name}
                                                </p>
                                            </NavLink>
                                            <p className="comments__username">
                                                {'@' + user.first_name + '_' + user.last_name + ' ' + '25min'}
                                            </p>
                                        </div>
                                        <p className="comments__comment">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum velit accusamus dolor.
                                        </p>

                                        <ul className="comments__reacts">
                                            <li className="react__comments">
                                                <img src={comment} alt="" />
                                                <span>10</span>
                                            </li>
                                            <li className="react__circle">
                                                <img src={retweet} alt="" />
                                                <span>1</span>
                                            </li>
                                            <li className="react__likes">
                                                <img src={like} alt="" />
                                                <span>19</span>
                                            </li>
                                            <li className="react__forward">
                                                <img src={share} alt="" />
                                                <span>7</span>
                                            </li>
                                            <li className="react__statistics">
                                                <img src={statistics} alt="" />
                                                <span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Main