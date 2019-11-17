import React,{ Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment,get_more }  from '../../actions'
import './hot.scss'
import BScroll from 'better-scroll'
import _ from 'loadsh'
import { Toast } from 'antd-mobile';

class Hot extends Component{
   
   componentDidMount(){
        this.props.increment()
        
        const bs =new BScroll('.hot-box',{
            pullUpLoad:{
              threshold:20
            }
          })

          bs.on('pullingUp',() => {
              this.props.get_more()

            // const movieIds = this.movies.movieIds.slice(12)
            // const ids = _.chunk(movieIds,10)
            // if(count == ids.length){
            //   Toast({
            //       message: '已经没有更多的电影了',
            //       position: 'bottom',
            //       duration: 2000
            //     });
              bs.finishPullUp(
                Toast.offline('我是有底线的 !!!', 1)
              )
            // }
        })
    }
   

    renderMovie = () => {
       return(
        this.props.movie.movieList.map( item => (
            <li key={item.id}>
            <img src={item.img.replace('w.h', '128.180')} />
            <div className="content">
                <h3>{item.nm} {item.version && <span></span>}</h3>
                <span>{item.sc == 0 && <span>{item.wish}<b>人想看</b></span> || <i>观众评<strong>{item.sc}</strong></i>}</span>
                <p>主演:{item.star}</p>
                <b>{item.showInfo}</b>
            </div>
            <button className={item.globalReleased && "normal" || 'pre'}>{item.globalReleased && '购买' || '预售'}</button>
        </li>

        ) )
        // <div>11</div>
       )
    }
    render(){
        return(
            <div className = "hot-box">
                <ul className = "container hotlist">
                   { this.props.movie && this.renderMovie() } 
                </ul>
             </div>
        )
    }
}
export default connect( state => {
    if(state.movieState.more_movies){
    state.movieState.more_movies.data.coming.forEach(item => {
        state.movieState.movie.movieList.push( item )
    } 
    ) }
    console.log(state)

    return { movie:state.movieState.movie}
    
   }
,
dispatch => bindActionCreators( { increment,get_more },dispatch ))(Hot)