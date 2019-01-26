import React from 'react';
import './post.css';


const MakePost = props => (
    <div className="postBackground">
        <h2 style={{color: 'black'}}>Make A Post</h2>
        <div>
            <input 
                className="form-control" 
                type="text" 
                placeholder="Whats Your Debate Title?"
                name="debateTitle"
                value1={props.value}
                onChange={props.handleChange}

            />
        </div>
        <div>
            <div className="input-group">
                <textarea 
                    className="form-control" 
                    aria-label="With textarea"
                    name="debateContext"
                    value2={props.value}
                    onChange={props.handleChange}
                    >
                </textarea>
            </div>
            <div>
            <input 
                className="form-control" 
                type="text" 
                placeholder="Whats Your Debate Title?"
                name="debateTags"
                value3={props.value}
                onChange={props.handleChange}

            />
        </div>
        
        <button onClick={props.post}>POST</button>
        </div>
    </div>

    
);

export default MakePost;
