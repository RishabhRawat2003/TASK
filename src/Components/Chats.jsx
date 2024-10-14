import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../store/chatSlice.js';
import { FcGallery } from "react-icons/fc";
import { IoMdSend } from "react-icons/io";

function Chats() {
    const [message, setMessage] = useState('');
    const chats = useSelector((state) => state.chat.chat);
    const dispatch = useDispatch();
    const [chatsArr, setChatsArr] = useState([]);
    const userTwoDetails = useSelector((state) => state.user.userTwo);
    const bottomRef = useRef(null);
    useEffect(() => {
        if (chats) {
            setChatsArr(chats);
        }
    }, [chats]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatsArr]);

    const handleSubmitMessage = () => {
        if (message.trim()) {
            const newMessage = {
                sender: userTwoDetails.username,
                message: message,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                profileImage: userTwoDetails.profileImage
            };
            dispatch(addMessage(newMessage));
            setMessage('');
        }
    };

    return (
        <div className='w-full h-[89.4vh] bg-gray-800 flex flex-col md:w-[60vw] mx-auto lg:w-[50vw] xl:w-[40vw] relative'>
            <div className='w-full h-full flex-grow p-3 scrollbar-none overflow-y-scroll element-class'>
                {
                    chatsArr.map((user, index) => (
                        user.sender !== 'Ankit Singh'
                            ? <div key={index} className='w-full flex justify-end mt-4 items-center'>
                                <div className='w-auto rounded-lg bg-blue-500 text-white flex items-center px-4 py-2 mr-2 max-w-[79vw] md:w-[45vw] lg:w-[40vw] xl:w-[30vw]'>
                                    {user.message}
                                </div>
                                <div className='w-auto h-auto flex flex-col justify-center items-center'>
                                    <img src={user.profileImage} alt="profile Image" className='w-5 sm:w-7 lg:w-8' />
                                    <span className='text-gray-300 text-[7px] font-semibold flex-1 md:text-sm'>{user.timestamp}</span>
                                </div>
                            </div>
                            : <div key={index} className='w-full flex mt-4 items-center'>
                                <div className='w-auto h-auto flex flex-col justify-center items-center gap-1'>
                                    <img src={user.profileImage} alt="profile Image" className='w-5 sm:w-7 lg:w-8' />
                                    <span className='text-gray-300 text-[7px] font-semibold flex-1 md:text-sm'>{user.timestamp}</span>
                                </div>
                                <div className='w-auto rounded-lg bg-gray-200 flex items-center px-4 py-2 ml-2 max-w-[79vw] md:w-[45vw] lg:w-[40vw] xl:w-[30vw]'>
                                    {user.message}
                                </div>
                            </div>
                    ))
                }
                <div ref={bottomRef} />
            </div>

            <div className='w-full bg-gray-600 p-4 flex-shrink-0'>
                <div className='w-[95%] h-12 border-[1px] border-white rounded-3xl mx-auto flex p-2'>
                    <div className='p-1.5 rounded-full bg-gray-200 flex items-center cursor-pointer'>
                        <FcGallery size={20} />
                    </div>
                    <div className='flex-1 px-3'>
                        <input
                            type="text"
                            placeholder='Message...'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' ? handleSubmitMessage() : null}
                            className='w-full h-full px-1 outline-none bg-gray-600 text-white'
                        />
                    </div>
                    <div className='p-1.5 rounded-full bg-gray-200 flex items-center cursor-pointer'>
                        <span onClick={handleSubmitMessage}> {/* Send on click */}
                            <IoMdSend size={20} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chats;
