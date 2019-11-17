import React from 'react'
import { NavLink } from 'react-router-dom'
import './TabBar.scss'

const TabBar = props =>{
    const navs =  [
        {
            id: 1,
            icon: 'fa-home',
            path: '/home',
            text: '电影'
          },
          {
            id: 2,
            icon: 'fa-hand-peace',
            path: '/cinema',
            text: '影院'
          },
          {
            id: 3,
            icon: 'fa-gifts',
            path: '/mine',
            text: '我的'
          }
    ]

    function renderNav(){
        return navs.map( item => (
            <li
                key = { item.id }
            >
                <NavLink
                    to = { item.path }
                    activeClassName = "active"
                >
                    <i className = { 'fas ' + item.icon }></i>
                    <span>
                        { item.text }
                    </span>
                </NavLink>
            </li>
        ))
    }

    return (
        <footer>
            <ul>
                { props.tabBarFlag && renderNav() }
            </ul>
        </footer>
    )
}
export default  TabBar