import React,{Component} from 'react'
import Tab from '../components/common/Tab'
import TabBar from '../components/common/TabBar'

import { Route,Switch,Redirect,withRouter} from 'react-router-dom'
import Home from '../pages/home'
import Cinema from '../pages/cinema'
import Mine from '../pages/mine'

class LayOut extends Component{
    constructor(props){
        super(props)
        this.state={
            tabFlag:false,
            tabBarFlag:true,
            name:'原来此生非我有',
            title:{
                '/home':'无人与为伴',
                '/cinema':'电影院',
                '/mine':'个人中心'
            },
            arr:['/home'],
            arr_bar:['/mine'],

        }
    }
    componentDidMount(){
        this.renderTab()
        this.renderTabBar()

    }
    componentWillReceiveProps(nextProps){
        this.renderTab(nextProps)
        this.renderTabBar(nextProps)
    }

    renderTab = nextProps=>{
        const { pathname } = nextProps && nextProps.location || this.props.location
        const f = this.state.arr.some( item => item == pathname )
        if(f){
            this.setState({
                tabFlag:false
            })
        }else{
            this.setState({
                tabFlag:true
            })
        }
    }

    renderTabBar = nextProps => {
        const { pathname } = nextProps && nextProps.location || this.props.location
        const f = this.state.arr_bar.some( item => ( item == pathname ) )
        if(f){
            this.setState({
                tabBarFlag:false
            })
        }else{
            this.setState({
                tabBarFlag:true
            })
        }
    }

    render(){
        const { name ,tabFlag,tabBarFlag,title } = this.state
        const { pathname } = this.props.location
        return (
            <div className = "layout">
                <Tab tabFlag = { tabFlag } title = { title[pathname] }  { ...this.props }></Tab>
               <Switch>
                    <Redirect from = "/" to = "/home" exact/>
                    <Route path='/home' component = { Home }/>
                    <Route path='/cinema' component = { Cinema }/>
                    <Route path='/mine' children = {()=><Mine name = {name} />}/>
               </Switch>
                <TabBar tabBarFlag = { tabBarFlag }></TabBar>

            </div>
        )
    }
}
export default withRouter(LayOut) 