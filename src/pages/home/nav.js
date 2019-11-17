import React,{Component} from 'react'
import {NavLink } from 'react-router-dom'
import './nav.scss'

export default class Nav extends Component {

    render(){

        return (
                <ul className="homeNav">
                     <li>
                        <a href="#">
                            <span>杭州</span>
                            <i className = "fas fa-angle-down"></i>
                        </a>
                    </li>
                    <li>
                        <NavLink
                         to = "/home/hot"
                         activeClassName = "active"
                        >
                            <span>正在热映</span>
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink
                         to = "/home/coming"
                         activeClassName = "active"
                        >
                            <span>即将上映</span>
                        </NavLink>
                    </li>
                    <li>
                        <a href="#">
                            <i className = "fas fa-angry"></i>
                        </a>
                    </li>
                </ul>
        )
    }
}