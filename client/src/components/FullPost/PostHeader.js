import React from 'react';

const PostHeader = props => {
    const {post} = props;
    return(
   <div style={{position: 'relative', left: '2.5%'}}>
       <div style={{borderRadius: '0px', width:'95%', background: 'black'}} class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">{}</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
   </div>
    )
};

export default PostHeader;