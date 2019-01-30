import React from 'react';
import './post.css';


const Comment = props => (
    <div className="postBackground">
        <h2 style={{color: 'black'}}>Make A Comment</h2>
        <div>
        </div>
        <div>
            <p>Context</p>
            <div className="input-group">
                <textarea 
                    className="form-control" 
                    aria-label="With textarea"
                    name="commentContent"
                    value4={props.value}
                    onChange={props.handleChange}
                    >
                </textarea>
            </div>
        
        <button onClick={props.comment}>POST</button>
        </div>
    </div>

    
);

export default Comment;