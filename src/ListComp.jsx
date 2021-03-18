import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import Popup from './Popup';

const ListComp = (props) => {

    const [line, setLine] = useState(false);

    const strikeIt = () => {
        if(line === false){
            setLine(true);
        }
        else{
            setLine(false);
        }
        
    };

    const deleteNote = () => {
        if(line === false){
        } else {
            props.deleteItem(props.id);
        }
    }
    
    return(
         <>
            <div className='todo_style'>
                <span onClick={strikeIt}>
                    <DeleteIcon className="deleteIcon" />
                </span>
                <span onClick={deleteNote}>
                    <Popup className="closeIcon" />
                </span>
                <li style={{textDecoration: line ? 'line-through' : 'none'}}>{props.text}</li>
            </div>
            <div className='todo_content'>
                <li id='time_style'>{props.time} (Last Edited)</li>
            </div>
            <div className='todo_content'>
                <li id='todo_content'>{props.content}</li>
            </div>
         </>
    );
};

export default ListComp;