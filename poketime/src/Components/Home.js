import React, { Component } from 'react';
//You can use fetch or axios
import axios from 'axios';

class Home extends Component {
    state = {
        post : [],
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                this.setState({
                    post: response.data.slice(0, 10),
                })
            })
    }
    render() {
    const { post } = this.state;
    let PostList = null;
    if (!post.length){
        PostList = (<div>No posts available</div>)
    }
    else {
        PostList = post.map(p => { return (
            <div className="post card" key={p.id}>
                <div className="card-content">
                    <span className="card-title">{p.title}</span>
                    <p>{p.body}</p>
                </div>
            </div>
        
        )})
    }
    
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            {PostList}
        </div>
    )
    }
};

export default Home;