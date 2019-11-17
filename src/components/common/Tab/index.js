import React from 'react'
import './Tab.scss'

const Tab = props =>{
    const { goBack } = props.history
        return (
            <header>
                {props.tabFlag && <i className = "fas fa-angle-left"  onClick = {goBack}></i>}
                <span>{ props.title }</span>
            </header>
        )
}
export default Tab