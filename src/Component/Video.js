import React, { Component,useState } from "react";
import './Video.css';
import YTSearch from 'youtube-api-search'
import config from '../config.json';


class Video extends Component{
	
	constructor(props){
        super(props)
        this.state = { videos : [], selectedVideo : null }
		this.onSearch=this.onSearch.bind(this);
    }
	
	componentDidMount(){
		console.log("mount");
		this.onSearch("66brother tech");
	}
	
	onSearch (input) {
        YTSearch( {key: config.YOUTUBE_API_KEY, term : input }, (videos)=> 
		{
			console.log('vid ',videos);
			this.setState({ videos:videos, selectedVideo: videos[0] })															
		});
    }
	
  render(){
        return(
			
            <div className="vedioContainer">
                <VideoDetail video= {this.state.selectedVideo} />
                <VideoList onVideoClick={ (selectedVideo) => this.setState({selectedVideo})} videos = {this.state.videos}/>
            </div>
        )
    }


}



const VideoList = (props) => {

    const VideoMapper = 
        props.videos.map( video => {return(<VideoListItem onVideoClick={props.onVideoClick} key={video.etag} video={video}/>)})
    

    return(
        <ul className = 'col-md-4 list-group'>
            {VideoMapper}
        </ul>
    )
}

const VideoListItem = (props) => {
    return(
        <li onClick={()=> props.onVideoClick(props.video)} className = 'list-group-item'>
            <div className= 'video-list-media'>
                <div className = 'media-left'>
                    <img className = 'media-object' src={props.video.snippet.thumbnails.default.url}/>
                </div>
                
            </div>

            <div className= 'media-body'>
                <div className = 'media-heading'>{props.video.snippet.title}</div>
            </div>
        </li>
    )
}


const VideoDetail = ({video}) => {
    if(!video){
        return(
            <div>loading!!</div>
        )
    }
    return (
        <div className = 'video-detail col-md-8'>
		
			<div className = 'details'>
                <h2>{video.snippet.title}</h2>
                <div>{video.snippet.description}</div>
            </div>
		
            <div className = 'embed-responsive embed-responsive-16by9'>
                <iframe className='embeded-responsive-item' src= {'https://youtube.com/embed/'+ video.id.videoId }></iframe>
            </div>


        </div>
    )
}

export default Video;