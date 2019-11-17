import React,{Component} from 'react'
import { Route ,Redirect} from 'react-router-dom'
import Nav from './nav'
import Hot from './hot'
import Comming from './comming'
import './index.scss'


export default class Home extends Component {
 
    
  
   
    render(){

        return (
            <div className = "container home">
                {/* <div className = ""> */}
                    <Nav/>
                    <Redirect to= "/home/hot" ></Redirect>
                    < Route path = "/home/hot" component = { Hot }/>
                    < Route path = "/home/comming" component = { Comming }/>
                {/* </div> */}
            </div>
        )
    }
}