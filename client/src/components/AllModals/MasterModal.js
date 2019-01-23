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
            currentModal = <MakePost />
            break;
        default:
            currentModal = 'hey';
    }
    
    return (
        <div className='opacityTransition' 
            style={{
                height: '100%', 
                position: 'absolute', 
                top:props.currentModal?'0px':'-100000px', 
                width: props.currentModal?'100%':'0px', 
                opacity: props.currentModal?'1':'0',
                zIndex: '300'
            }} 
            onClick={() => props.changeModal('')}
        >
            <div 
                style={{
                    width: '100%', 
                    maxWidth: '600px', 
                    color:'white', 
                    height: '500px', 
                    margin: '0 auto', 
                    background: 'black', 
                    borderRadius: '15px', 
                    padding: '10px', 
                    marginTop: '100px'
                }}
            >
                {currentModal}
            </div>
        </div>
    )
};

export default MasterModal;