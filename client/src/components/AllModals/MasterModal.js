import React from 'react';
import SignUp from './SignUp'
import Challenge from './Challenge'
import MakePost from './MakePost'
import Comment from './Comment'
import './masterModal.css'


const MasterModal = (props) => {
    let currentModal;
    switch(props.currentModal) {
        case 'SignUp':
            currentModal = <SignUp />
            break;
        case 'Challenge':
            currentModal = <Challenge />
            break;
        case 'Comment':
            currentModal = <Comment 
                                value4={props.value}
                                value5={props.value}
                                handleChange={props.handleChange}
                                comment={props.comment}
                                postData={props.postData}
                                postId={props.postId}
                            />
            break;
        case 'MakePost':
            currentModal = <MakePost 
                                value1={props.value}
                                value2={props.value} 
                                value3={props.value}
                                value4={props.value}
                                handleChange={props.handleChange}
                                post={props.post}
                            />
            break;
        default:
            currentModal = 'hey';
    }
    
    return (
        <div className='opacityTransition' 
            style={{
                height: '100%', 
                position: 'fixed', 
                top:props.currentModal?'0px':'-100000px', 
                width: props.currentModal?'100%':'0px', 
                opacity: props.currentModal?'1':'0',
                zIndex: '800'
            }} 
            
        >
            <div 
                style={{
                    width: '100%', 
                    maxWidth: '600px', 
                    color:'white', 
                    height: '500px', 
                    margin: '0 auto', 
                    borderRadius: '15px', 
                    padding: '10px', 
                    marginTop: '100px',
                    position: 'relative'
                }}
                // onClick={() => props.changeModal('')}
            >
                {currentModal}
                <span onClick={() => props.changeModal('')} style={{color: 'red', position: 'absolute', top: '5px', right: '10px' }}>X</span>
            </div>
            
        </div>
    )
};

export default MasterModal;