import React from 'react';
import SignUp from './SignUp'
import Challenge from './Challenge'
import MakePost from './MakePost'
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
        case 'MakePost':
            currentModal = <MakePost 
                                value1={props.value}
                                value2={props.value} 
                                value3={props.value}
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
                    
                    backgroundImage: 'linear-gradient(to bottom right,#3f51b5, rgb(0, 7, 162), #ff5722)', 
                    borderRadius: '15px', 
                    padding: '10px', 
                    marginTop: '100px'
                }}
                // onClick={() => props.changeModal('')}
            >
                {currentModal}
                <span onClick={() => props.changeModal('')} style={{color: 'red', position: 'absolute' }}>X</span>
            </div>
            
        </div>
    )
};

export default MasterModal;