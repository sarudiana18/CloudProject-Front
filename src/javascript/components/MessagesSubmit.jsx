import React from 'react';
import axios from 'axios';
import { DEFAULT_MAIL } from '../utils/constants';
//import { API_URL } from '../../.env';

function MessagesSubmit() {

    const handleMessageSend = async (e) => {
        const senderName = document.getElementById('senderName').value;
        const receiverMail = document.getElementById('receiverMail').value;
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;

        try {
            let response = await axios.post(
                `http://localhost:8080/messages/direction`,
                {
                    senderName,
                    senderMail: DEFAULT_MAIL,
                    receiverMail,
                    from,
                    to
                });

                if(response.status === 200) {
                    alert(`Total distance from ${from} to ${to} is ${response.data.directionInfo.distance} and the total duration is: ${response.data.directionInfo.duration}`);
                }
        }
        catch (error) {
            alert('Something went wrong');
            console.log(error);
        }
    }

    return (
        <div id="MessagesSubmit">
            <div className='text-2xl font-bold mb-4'>Submit your request direction information</div>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="senderName">
                            Your name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="senderName" type="text" placeholder="John" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="receiverMail">
                            Receiver mail
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="receiverMail" type="text" placeholder="john@mail.com" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="from">
                            From 
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="from" type="text" placeholder="Bucuresti" />
                        </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="to">
                            Destination
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="to" type="text" placeholder="Sibiu" />
                    </div>
                </div>
            </form>
            {/* Create a button to submit */}
            
                 
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 capitalize"
                onClick={handleMessageSend}>
                Submit
            </button>
                
        </div>
    );
}

export default MessagesSubmit;