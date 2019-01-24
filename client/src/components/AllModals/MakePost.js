import React from 'react';
import './post.css';


const MakePost = props => (
    <div className="postBackground">
        <h2 style={{color: 'black'}}>Make A Post</h2>
        <div>
            <input class="form-control" type="text" placeholder="Default input"/>
        </div>
        <div>
            <div class="input-group">
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
                Default checkbox
            </label>
    </div>
    </div>
);

export default MakePost;