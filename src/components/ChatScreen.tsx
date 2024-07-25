import React from 'react';

export default function ChatScreen() {
    return (
        <div className="mx-auto max-w-[720px] px-4 md:px-0 justify-center items-center mt-12">
            <ChatUser image="./ChatscreenUser.png" title="Who is the principal of the college?" />
            <ChatBot image="./ChatScreenLogo.png" title="To find out who the principal of a specific college is, you would typically need to check the official website of the college or contact the college directly through their official communication channels (such as email or phone). If you have a specific college in mind, I can assist you with general steps on how to find this information online or through official channels." />
            <ChatUser image="./ChatscreenUser.png" title="Who is the principal of the college?" />
            <ChatBot image="./ChatScreenLogo.png" title="To find out who the principal of a specific college is, you would typically need to check the official website of the college or contact the college directly through their official communication channels (such as email or phone). If you have a specific college in mind, I can assist you with general steps on how to find this information online or through official channels." />
            <ChatUser image="./ChatscreenUser.png" title="Who is the principal of the college?" />

            <div className="bg-[#FDEDED] flex justify-start m-5 h-12">
                <img className='h-5 w-5 m-2' src="./Alert.png" alt="" />
                <div className="m-2">
                    <p>An unexpected error occurred. Please try again later.</p>
                </div>
            </div>

            <div className="flex bg-white justify-center items-center align-middle rounded-xl p-2 h-11 m-5 mt-16 ">
                <textarea
                    className="grow focus:outline-none resize-none text-sm"
                    placeholder="Enter your query here."
                ></textarea>
                <button className="h-7 aspect-square flex justify-center items-center rounded bg-[#29166F]">
                    <svg
                        width="12"
                        height="15"
                        viewBox="0 0 12 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.82379 1.22059C6.60504 1.00211 6.30852 0.879395 5.99935 0.879395C5.69018 0.879395 5.39365 1.00211 5.1749 1.22059L0.773459 5.6197C0.554596 5.83856 0.431641 6.13541 0.431641 6.44492C0.431641 6.75444 0.554596 7.05128 0.773459 7.27015C0.992322 7.48901 1.28916 7.61196 1.59868 7.61196C1.9082 7.61196 2.20504 7.48901 2.4239 7.27015L4.83268 4.86215V13.8338C4.83268 14.1432 4.9556 14.44 5.17439 14.6588C5.39318 14.8776 5.68993 15.0005 5.99935 15.0005C6.30877 15.0005 6.60551 14.8776 6.82431 14.6588C7.0431 14.44 7.16602 14.1432 7.16602 13.8338V4.86215L9.57402 7.27015C9.68239 7.37852 9.81104 7.46448 9.95263 7.52313C10.0942 7.58178 10.246 7.61196 10.3992 7.61196C10.5525 7.61196 10.7043 7.58178 10.8458 7.52313C10.9874 7.46448 11.1161 7.37852 11.2245 7.27015C11.3328 7.16178 11.4188 7.03312 11.4774 6.89153C11.5361 6.74994 11.5663 6.59818 11.5663 6.44492C11.5663 6.29167 11.5361 6.13991 11.4774 5.99832C11.4188 5.85673 11.3328 5.72807 11.2245 5.6197L6.82379 1.22059Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export interface ChatProps {
    image: string;
    title: string;
}

export function ChatUser(props: ChatProps) {
    const { image, title } = props;
    return (
        <div className="flex justify-start m-5 items-start bg-white w-96 rounded-lg">
            <img className="w-9 h-9 m-2" src={image} alt="" />
            <div>
                <p className="m-2">{title}</p>
            </div>
        </div>
    );
}

export function ChatBot(props: ChatProps) {
    const { image, title } = props;
    return (
        <div className="flex justify-start items-start m-5 bg-gradient-to-r from-[#29166F] to-[#6E52D8] rounded-lg">
            <img className="w-9 h-9 m-2" src={image} alt="" />
            <div>
                <p className="m-2 text-white text-sm">{title}</p>
            </div>
        </div>
    );
}