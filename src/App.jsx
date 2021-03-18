import React, { useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListComp from './ListComp';
import SearchIcon from '@material-ui/icons/Search';
import Toast from 'react-bootstrap/Toast';
// import Toast from 'react-bootstrap/Toast';
// import SanitizedHTML from 'react-sanitized-html';

const App = () => {

    const [item, setItem] = useState({
        title: '',
        content: '',
        time: '',
    });
    const [newitem, setNewItem] = useState([]);

    const enteredData = (event) => {
        console.log(event.target.value);
        const { name, value } = event.target;
        time_func();
        var n = value.charCodeAt(event.target.value.length-1)
        console.log(n);
        if((n >=97 && n <=122) || (n >=65 && n<=90) || (n >=49 && n<=57)){
            event.target.value = event.target.value.substring(0, value.length)
        } else{
            event.target.value = event.target.value.substring(0, value.length - 2) ;
        }
        event.target.value = truncatetext(event.target.value, 140);
        // val = ""
        console.log(event.target.value);
        setItem((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        });
    }

    const listOfItems = () =>{
        console.log(item.title);
        item.title = removeExtraSpaces(item.title);
        item.title = truncateWord(item.title, 30);
        item.title = stripHTML(item.title);
        item.content = removeExtraSpaces(item.content);
        item.content = truncateWord(item.content, 30);
        item.content = stripHTML(item.content);
        item.title = item.title.replace(/[^a-zA-Z0-9 ]/g, '');
        item.content = item.content.replace(/[^a-zA-Z0-9 ]/g, '');
        setNewItem((prevValue) =>{
            return [...prevValue, item];
        });
        setItem({
            title: '',
            content: '',
            time: '',
        });
    }

    const time_func = () =>{

        var current = new Date();
        // curr_time = current.toLocaleTimeString();
        console.log(current.toLocaleString());
        setItem((prevData) => {
            return {
                ...prevData,
                time: current.toLocaleString(),
            }
        })
    }

    // --------------------------------------------


    const stripHTML = (html) => {
        html = html.replace(/<(?:.|\n)*?>/gm, "");
        html = html.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/ig, "\n");
        return html.trim();
      }

    var removeExtraSpaces = (text) => {
        var wordsArr = text.split(' ');
        return wordsArr.filter(function(word) {
            return word !== '';
        }).join(' ');
    };
    
    // Truncate word with the specified length
    var truncateWord = function(text, maxLength) {
        var wordsArr = text.split(' ');
        return wordsArr.map(function(word) {
            if(word.length > maxLength) {
                return word.substring(0, maxLength);
            }
            return word;
        }).join(' ');
    };

    var truncatetext = function(text, maxLength) {
        if(text.length > maxLength){
            return text.substring(0, maxLength);
        }
    };

    // --------------------------------------------------------
    // delte a note
    const onDelete = (id) => {
        setNewItem((oldData) => 
          oldData.filter((currdata, indx) => {
            return (indx !== id);
          })
        );
      }
  
    // ----------------------------------------------------------
    // search comp

    const [search, setSearch] = useState("");
    const [filteredTasks, setFilteredTasks] = useState([]);

    const [show, setShow] = useState(false);


    
    useEffect(() => {
            setFilteredTasks(
                newitem.filter((item) =>
                  item.title.toLowerCase().includes(search.toLowerCase())
                )
              );
        },[search, newitem]);

    //   if (item.title.length >=3) {
    //     setFilteredTasks(
    //         newitem.filter((item) =>
    //           item.title.toLowerCase().includes(search.toLowerCase())
    //         )
    //       );
    //   }

    // ----------------------------------------------------------

    // function InvalidDepToast(props) {

    //     return (
    //           <Toast onClose={() => props.setShow(false)} className="CreatedLPToast" show={props.showPopup} delay={3000} autohide>
    //             <div className="ToastBody" style={{width:"625px"}}>
    //              <Toast.Body className="ToastBodySpan">
    //              </Toast.Body>
    //             </div>
    //           </Toast>
    //     );
    //   }

    function Warning(props) {

        return (
              <Toast onClose={() => {props.setShow(false)}} className="CreatedLPToast" show={props.show} delay={3000} autohide>
                <div className="" style={{width:"25px"}}>
                 <Toast.Body className="">
                     Uncompleted Tasks cannot be deleted <i className="fa fa-warning" style={{color:"yellow",marginRight:"30px"}}></i>  <span onClick={()=>{props.setShow(false)}}><i className="fa fa-window-close"></i></span>
                 </Toast.Body>
                </div>
              </Toast>
        );
      }

    return(
        <>
            <div className='main_div'>
            <Warning show={show} setShow={setShow}/>
                <div className='center_div'>
                    <br />
                        <h1>ToDo List</h1>
                    <br />
                    <input
                        style={{marginBottom:'20px'}}
                        type="text"
                        placeholder="Search Tasks 🔍" 
                        onChange={(e) => {if(e.target.value.length >=3){setSearch(e.target.value)}else{setFilteredTasks(newitem)}}}
                    />
                    
                    <br />
                    <input minLength='5' maxLength='30' name="title" type='text' placeholder='Title' value={item.title} onChange={enteredData} />
                    <textarea maxlength='140' name="content" rows='' column='' placeholder='Write a note' value={item.content} onChange={enteredData}></textarea>
                    <Button className='newBtn' onClick={listOfItems}>
                        <AddIcon />
                    </Button>

                    <br />
                    <ol className='scroll_list'>
                        {filteredTasks.map((val, index) =>{
                            return <ListComp setShow={setShow} id={index} key={index} text={val.title} content={val.content} time={val.time} deleteItem={onDelete} />;
                        })}
                    </ol>
                    <br />
                </div>
            </div>
            {/* <InvalidDepToast show={showPopup} setShow={setShow} /> */}
        </>
    );
}

export default App;