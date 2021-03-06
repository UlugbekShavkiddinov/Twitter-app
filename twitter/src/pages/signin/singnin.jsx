import React from 'react'
import { useNavigate } from 'react-router-dom'


import Logo from '../../libs/images/twitter-logo.svg'
import './signin.css'

function Signin() {
    const navigate = useNavigate()

    return (
        <div id="signin_wrapper">
            <div className="signin__logo">
                <img src={Logo} alt="logo" />
            </div>
            <h2 className='signin__title'>Create an account</h2>
            <input type="text" placeholder='Name' className="signin__input" />
            <input type="number" placeholder='Phone number' className="signin__input" />
            <a href="" className="signin__link">Use Email</a>
            <h3 className="signin__date-title">Date of birth</h3>
            <p className="signin__text">Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
            <div className="signin__dates">
                <select name="" id="" className='data__month'>
                    <option value="" defaultChecked >Month</option>
                    <option value="">January</option>
                    <option value="">February</option>
                    <option value="">March</option>
                    <option value="">April</option>
                    <option value="">May</option>
                    <option value="">June</option>
                    <option value="">July</option>
                    <option value="">August</option>
                    <option value="">September</option>
                    <option value="">October</option>
                    <option value="">November</option>
                    <option value="">December</option>
                </select>
                <select name="" id="" className="data__days">
                    <option value="" disabled aria-readonly>Day</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                    <option value="">13</option>
                    <option value="">14</option>
                    <option value="">15</option>
                    <option value="">16</option>
                    <option value="">17</option>
                    <option value="">18</option>
                    <option value="">19</option>
                    <option value="">20</option>
                    <option value="">21</option>
                    <option value="">22</option>
                    <option value="">23</option>
                    <option value="">24</option>
                    <option value="">25</option>
                    <option value="">26</option>
                    <option value="">28</option>
                    <option value="">28</option>
                    <option value="">29</option>
                    <option value="">30</option>
                </select>
                <input type="text" className='data__year' placeholder='Year' />
            </div>
            <button className="signin__btn" onClick={() => navigate('/home')}>Next</button>
        </div>
    )
}

export default Signin;