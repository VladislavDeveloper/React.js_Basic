import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";

import "./ChatList.css"

import { chatListSelector } from "../../Store/chats/selectors";
import { addChat } from "../../Store/chats/actions";
import { removeChatAction } from "../../Store/chats/actions";
import { removeMessages } from "../../Store/messages/actions";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    borderRadius: 10,
    bgcolor: 'background.paper',
    p: 4,
};


export function ChatList(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newChatName, setNewChatName] = useState('');

    // const chats = useSelector(chatListSelector);

    const [chats, setChats] = useState([]);

    const chatId = Date.now();

    const dispatch = useDispatch();

    const handleChange = event => {
        setNewChatName(event.target.value);
    }

    useEffect(()=> {
        firebase.database().ref("chats").child("chat").on("value", (snapshot) => {
            const newChats = [];
            snapshot.forEach(entry => {
            newChats.push(entry.val());
            });
            console.log(newChats);
            setChats(newChats);
        })
    },[]);

    const onAddChat = () => {
        // dispatch(addChat(newChatName));
        // setNewChatName('');
        // handleClose();
         firebase.database().ref("chats").child(chatId).push({name: newChatName});
         setNewChatName('');
         handleClose();
    }

    return(
        <div className="contacts-list">
            <div className="contacts-search">
                <form className="contacts-form">
                    <Icon onClick={handleOpen} sx={{ color: green[500] }}>add_circle</Icon>
                    <input className="contacts-search-input" type="text" placeholder="Поиск...." />
                    <button className="search-btn" type="submit">Поиск</button>     
                </form>
                
            </div>

            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div className="add-new-contact">
                        <h3>Новый контакт</h3>
                        <div className="decor-line"></div>
                        <input value={newChatName} onChange={handleChange} type="text" />
                        <button onClick={onAddChat} className="add-contact-btn">Добавить</button>
                    </div>
                </Box>
            </Modal>
            
            <h3>Ваши контакты:</h3>
            {chats.map((chat) => {
                return  <div className="contact-profile" key={chat.id}>
                            <div className="main-contact-info">
                                <div>
                                    <Avatar />
                                </div>
                                <div className="user-name-link">
                                    <Link className="user-link" to={`chat/${chat.id}`}><h3>{chat.name}</h3></Link>
                                </div>   
                            </div>
                            
                            <div className="delete-contacts">
                                <DeleteIcon 
                                onClick={() => 
                                    {dispatch(removeChatAction(chat.id),
                                     dispatch(removeMessages(chat.id)))}}
                                />
                            </div>
                        </div>
            })}
        </div>
    )
}