import React from "react";
import '../../components/sidebarRight/sidebarR.css';
import './sidebarRProfile.css'

import { Context } from '../../context/localization'
import langData from '../../localization/data'
import { ThemeContext } from '../../context/theme'

import img1 from '../../libs/images/img1.png'
import img2 from '../../libs/images/img2.png'
import img3 from '../../libs/images/img3.png'
import img4 from '../../libs/images/img4.png'
import img5 from '../../libs/images/img5.png'
import img6 from '../../libs/images/img6.png'


function SidebarRProfile() {
    const { state, setState } = React.useContext(Context)
    const { theme } = React.useContext(ThemeContext)

    return (

        <div id="sidebarR-wrapper" className={theme === 'light' ? 'light' : 'dark'}>
            <input className="sidebar__search" type="search" placeholder={langData[state].sidberR.searchPlaceholder} />
            <div className="images">

                <img src={img1} alt="img" />


                <img src={img2} alt="img" />
                <img src={img3} alt="img" />
                <img src={img4} alt="img" />
                <img src={img5} alt="img" />
                <img src={img6} alt="img" />
            </div>
            <div className="recommendation">
                <h3 className="recommendation__title">{langData[state].sidberR.recommendation.title}</h3>
                <ul className="recommendation__list">
                    <li className="recommendation__item">
                        <div className="recommendation__names">
                            <p className="recommendation__name">Mushtariy</p>
                            <p className="recommendation__username">@Mushtar565266</p>
                        </div>
                        <button className="recommendation__btn-follow">Follow</button>
                    </li>
                    <li className="recommendation__item">
                        <div className="recommendation__names shuxratbek">
                            <p className="recommendation__name">Shukhratbek</p>
                            <p className="recommendation__username">@mrshukhrat</p>
                        </div>
                        <button className="recommendation__btn-follow">Follow</button>
                    </li>
                </ul>
                <a href="" className="recommendation__link">{langData[state].sidberR.recommendation.link}</a>
            </div>
            <div className="trends">
                <h3 className="trends__tittle">{langData[state].sidberR.trends.title} </h3>
                <ul className="trends__list">
                    <li className="trends__item">
                        <span className="trends__subname">{langData[state].sidberR.trends.subName}</span>
                        <p className="trends__name">{langData[state].sidberR.trends.name}</p>
                        <span className="trends__tweets">{langData[state].sidberR.trends.tweets}</span>
                    </li>
                    <li className="trends__item">
                        <span className="trends__subname">{langData[state].sidberR.trends.subName}</span>
                        <p className="trends__name">{langData[state].sidberR.trends.name}</p>
                        <span className="trends__tweets">{langData[state].sidberR.trends.tweets}</span>
                    </li>
                    <li className="trends__item">
                        <span className="trends__subname">{langData[state].sidberR.trends.subName}</span>
                        <p className="trends__name">{langData[state].sidberR.trends.name}</p>
                        <span className="trends__tweets">{langData[state].sidberR.trends.tweets}</span>
                    </li>
                </ul>
                <a className="trends__link" href="">{langData[state].sidberR.trends.link}</a>
            </div>

        </div>


    )
}

export default SidebarRProfile;