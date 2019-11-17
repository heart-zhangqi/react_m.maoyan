import React,{Component} from 'react'

export default class mine extends Component {
    render(){
        return (
            <div className = "container">
               欢迎回来： { this.props.name }
            </div>
        )
    }
}