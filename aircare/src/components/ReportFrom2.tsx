import React, { useState } from 'react'
import { Link } from 'react-router-dom';

interface FormDataType {
    category: string;
    type: string;
    description: string;
    image: File | null;
    file: File | null;
}
const ReportFrom2 = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [capturedImageUrl, setCapturedImageUrl] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        category: '',
        type: '',
        description: '',
        image: null as null | File, // Update the type to allow null and File
        file: null as null | File,
    });

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const captureImage = () => {
        const imageInput = document.getElementById('imageInput');

        if (imageInput) {
            // It's not null, so you can safely use it
            imageInput.click();
        } else {
            // Handle the case where imageInput is null
            console.error('imageInput is null');
        }
    };

    const togglePopUp = () => {
        setIsPopupOpen(true);
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputElement = event.target as HTMLInputElement;
        if (inputElement.files) {
            setFormData({
                ...formData,
                file: inputElement.files[0],
            });
        } else {
            console.log('No files selected');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Create a FormData object to send the data

        console.log(formData);

        // Make an HTTP POST request to your API
        fetch('https://4jzqjgxlsc.sharedwithexpose.com/createPollutionReport', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    // Request was successful
                    return response.json();
                }
                throw new Error('Network response was not ok');
            })
            .then((data) => {
                // Handle the API response
                console.log(data);
            })
            .catch((error) => {
                // Handle errors
                console.error('Error:', error);
            });
    };

    return (
        <form onSubmit={handleFormSubmit} className='mb-28'>
            <div className="px-[23px]">
                <p className="text-base font-bold text-center uppercase text-[#343a40] mt-[49px] mb-[57px]">Пријави ЗАГАДУВАЊЕ</p>
                <p className="text-base font-semibold text-[#343a40]">Избери извор на загадување</p>
                <div className="mt-[29px] mb-[118px] flex justify-between">
                    <label onClick={togglePopUp} htmlFor="fabrika">
                        <input id='fabrika' type="radio" name="category" value="factory" onChange={handleChange} className='hidden' />
                        <div className="w-[119px] h-[104px]" style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))" }}>
                            <div
                                className="flex flex-col h-full justify-center items-center rounded-[10px] bg-[#f9fbfd] px-[15px] py-2 ">
                                <svg width="58" height="58" viewBox="0 0 58 58" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" className="w-[58px] h-[58px] relative"
                                    preserveAspectRatio="none">
                                    <g filter="url(#filter0_i_5053_540)">
                                        <path
                                            d="M52.281 13.5978L35.4449 24.65V15.3217C35.4459 15.0168 35.3604 14.7179 35.1983 14.4597C35.0363 14.2014 34.8042 13.9945 34.5292 13.8629C34.2542 13.7313 33.9475 13.6804 33.6447 13.7162C33.3419 13.752 33.0555 13.8729 32.8188 14.065L22.6688 22.5556H16.1115V6.54112L6.44488 4.36612V22.5556H3.22266V49.9445C3.22266 50.3718 3.3924 50.7815 3.69454 51.0837C3.99668 51.3858 4.40647 51.5556 4.83377 51.5556H53.1671C53.5944 51.5556 54.0042 51.3858 54.3063 51.0837C54.6085 50.7815 54.7782 50.3718 54.7782 49.9445V14.935C54.7767 14.6449 54.6969 14.3605 54.5472 14.112C54.3975 13.8635 54.1834 13.66 53.9277 13.523C53.6719 13.3861 53.3839 13.3207 53.094 13.3339C52.8042 13.347 52.5233 13.4382 52.281 13.5978ZM22.556 46.7222H9.6671V43.5H22.556V46.7222ZM22.556 40.2778H9.6671V37.0556H22.556V40.2778ZM22.556 33.8333H9.6671V30.6111H22.556V33.8333ZM35.4449 46.7222H32.2227V41.8889H35.4449V46.7222ZM35.4449 37.0556H32.2227V32.2222H35.4449V37.0556ZM41.8893 46.7222H38.6671V41.8889H41.8893V46.7222ZM41.8893 37.0556H38.6671V32.2222H41.8893V37.0556ZM48.3338 46.7222H45.1115V41.8889H48.3338V46.7222ZM48.3338 37.0556H45.1115V32.2222H48.3338V37.0556Z"
                                            fill="#EAEAEA"></path>
                                    </g>
                                    <defs>
                                        <filter id="filter0_i_5053_540" x="3.22266" y="4.36612" width="51.5555" height="48.1895"
                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha">
                                            </feColorMatrix>
                                            <feOffset dy="1"></feOffset>
                                            <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1">
                                            </feComposite>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0">
                                            </feColorMatrix>
                                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5053_540"></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                                <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-[#343a40]">Фабрика</p>
                            </div>
                        </div>
                    </label>
                    <label onClick={togglePopUp} htmlFor="domakinstvo">
                        <input id='domakinstvo' type="radio" name="category" value="home" onChange={handleChange} className='hidden' />
                        <div className="w-[119px] h-[104px]" style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))" }}>
                            <div
                                className="flex flex-col h-full justify-center items-center rounded-[10px] bg-[#f9fbfd] px-[15px] py-2 ">
                                <svg width="58" height="58" viewBox="0 0 58 58" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" className="w-[58px] h-[58px] relative"
                                    preserveAspectRatio="xMidYMid meet">
                                    <g filter="url(#filter0_i_5200_191)">
                                        <path
                                            d="M23.5625 52.5625V39.8569C23.5625 38.9688 24.4688 38.0625 25.375 38.0625H32.625C33.5313 38.0625 34.4375 38.9688 34.4375 39.875V52.5625C34.4375 53.0432 34.6285 53.5042 34.9684 53.8441C35.3083 54.184 35.7693 54.375 36.25 54.375H50.75C51.2307 54.375 51.6917 54.184 52.0316 53.8441C52.3715 53.5042 52.5625 53.0432 52.5625 52.5625V27.1875C52.5629 26.9493 52.5164 26.7134 52.4256 26.4932C52.3348 26.273 52.2015 26.0729 52.0333 25.9043L47.125 20.9996V9.06251C47.125 8.5818 46.934 8.12078 46.5941 7.78087C46.2542 7.44096 45.7932 7.25001 45.3125 7.25001H41.6875C41.2068 7.25001 40.7458 7.44096 40.4059 7.78087C40.066 8.12078 39.875 8.5818 39.875 9.06251V13.7496L30.2833 4.15426C30.1149 3.98546 29.9149 3.85155 29.6947 3.76017C29.4745 3.6688 29.2384 3.62177 29 3.62177C28.7616 3.62177 28.5255 3.6688 28.3053 3.76017C28.0851 3.85155 27.8851 3.98546 27.7168 4.15426L5.96675 25.9043C5.79855 26.0729 5.66523 26.273 5.57441 26.4932C5.4836 26.7134 5.43708 26.9493 5.4375 27.1875V52.5625C5.4375 53.0432 5.62846 53.5042 5.96837 53.8441C6.30828 54.184 6.7693 54.375 7.25 54.375H21.75C22.2307 54.375 22.6917 54.184 23.0316 53.8441C23.3715 53.5042 23.5625 53.0432 23.5625 52.5625Z"
                                            fill="#EAEAEA"></path>
                                    </g>
                                    <defs>
                                        <filter id="filter0_i_5200_191" x="5.4375" y="3.62177" width="47.125" height="51.7532"
                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha">
                                            </feColorMatrix>
                                            <feOffset dy="1"></feOffset>
                                            <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1">
                                            </feComposite>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0">
                                            </feColorMatrix>
                                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5200_191"></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                                <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-[#343a40]">Домаќинство</p>
                            </div>
                        </div>
                    </label>
                    <label onClick={togglePopUp} htmlFor="drugo">
                        <input type="radio" name="category" value="other" onChange={handleChange} id='other' className='hidden' />
                        <div className="w-[119px] h-[104px]" style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))" }}>
                            <div
                                className="h-full flex flex-col justify-center items-center rounded-[10px] bg-[#f9fbfd] px-[15px] py-2 ">
                                <svg width="39" height="43" viewBox="0 0 39 43" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                    <g filter="url(#filter0_i_5200_196)">
                                        <path
                                            d="M0 17.9667C0 15.7959 0.687023 13.8561 2.03817 12.1472C3.38931 10.4382 5.10687 9.35285 7.19084 8.89098C7.76336 6.30451 9.0687 4.15682 11.1298 2.49409C13.1908 0.831365 15.5267 0 18.1832 0C20.7481 0 23.0611 0.808271 25.0992 2.42481C27.1374 4.04135 28.4427 6.11976 29.0611 8.63695H29.6794C32.2443 8.63695 34.4427 9.53759 36.2748 11.362C38.084 13.1633 39 15.3802 39 17.9436C39 19.3292 38.7252 20.6455 38.1527 21.8695C37.5802 23.0935 36.8015 24.1557 35.7939 25.0333V25.1026C35.7939 26.4651 35.3588 27.689 34.5114 28.7744C33.6641 29.8598 32.5878 30.5295 31.3053 30.8298C30.9847 32.2615 30.2748 33.4855 29.2214 34.4785C28.1679 35.4715 26.9084 36.0951 25.4885 36.326C26.1527 37.1112 26.4733 37.9887 26.4733 38.9356C26.4733 40.044 26.084 40.9909 25.3053 41.7991C24.5267 42.5843 23.5878 43 22.4886 43C21.3893 43 20.4504 42.6074 19.6718 41.7991C18.8931 41.014 18.5038 40.044 18.5038 38.9356C18.5038 38.4968 18.5725 38.058 18.7328 37.6192H18.5038C17.1756 37.6192 16.0305 37.1343 15.0687 36.1643C14.1069 35.1944 13.626 34.0397 13.626 32.7003C13.626 31.7766 13.855 30.9452 14.313 30.2293C13.1221 29.5596 12.2748 28.6128 11.7481 27.3426H8.81679V27.3196C6.36641 27.1579 4.28244 26.188 2.56489 24.3867C0.847328 22.5854 0 20.4608 0 17.9667ZM3.20611 17.3894C3.20611 19.2368 3.84733 20.8072 5.12977 22.1004C6.41221 23.3937 7.96946 24.0403 9.77863 24.0403C10.9008 24.0403 11.9542 23.7863 12.916 23.2551C13.1908 24.964 13.9924 26.3958 15.2977 27.5505C16.6031 28.7052 18.1603 29.2594 19.9237 29.2594C21.916 29.2594 23.6107 28.5435 25.0076 27.1348C25.9466 28.2433 27.1145 28.7744 28.5343 28.7744C29.8397 28.7744 30.9389 28.3126 31.8779 27.3888C32.7939 26.4651 33.2519 25.3335 33.2519 24.0172C34.1679 23.3937 34.9008 22.6085 35.4275 21.6155C35.9542 20.6455 36.229 19.5832 36.229 18.4517C36.229 16.6273 35.5878 15.0569 34.2824 13.7868C32.9771 12.5167 31.4198 11.87 29.5878 11.87C28.3053 11.87 27.1374 12.2164 26.084 12.8861C26.2214 12.3319 26.2672 11.7084 26.2672 11.0618C26.2672 8.84479 25.4886 6.95113 23.9084 5.38077C22.3282 3.81042 20.4275 3.04834 18.2061 3.04834C16.0534 3.04834 14.1985 3.81042 12.6412 5.2884C11.084 6.76638 10.2595 8.61386 10.1908 10.7615H9.80153C7.99237 10.7615 6.45802 11.4082 5.15267 12.7014C3.84733 13.9946 3.20611 15.5881 3.20611 17.3894Z"
                                            fill="#EAEAEA"></path>
                                    </g>
                                    <defs>
                                        <filter id="filter0_i_5200_196" x="0" y="0" width="39" height="44"
                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                            </feBlend>
                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha">
                                            </feColorMatrix>
                                            <feOffset dy="1"></feOffset>
                                            <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1">
                                            </feComposite>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0">
                                            </feColorMatrix>
                                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5200_196">
                                            </feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                                <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-[#343a40]">Друго</p>
                            </div>
                        </div>
                    </label>
                </div>
                {isPopupOpen && (
                    <div className="mb-5">
                        <div className="category">
                            <input type="radio" id="cad" name="type" value="smoke" onChange={handleChange} className='hidden' />
                            <label htmlFor="cad" className='p-2 border rounded' style={{ filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))" }}>Чад</label>
                            <input type="radio" id="mirizba" name="type" value="smell" onChange={handleChange} className='hidden' />
                            <label htmlFor="mirizba" className='p-2 border rounded mx-3'>Миризба</label>
                            <input type="radio" id="drugo" name="type" value="other" onChange={handleChange} className='hidden' />
                            <label htmlFor="drugo" className='p-2 border rounded'>Друго</label>
                        </div>
                    </div>
                )}
                <div className="flex justify-center">
                    <svg width="348" height="2" viewBox="0 0 348 2" fill="none"
                        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                        <path d="M1 1L347 1" stroke="#CCCCCC" stroke-linecap="round"></path>
                    </svg>
                </div>
                <div className="flex items-center gap-[7px] mt-[22px] mb-[38px]">
                    <p className="text-base font-semibold text-[#343a40] flex">Прикачи фотографија</p>
                    <p className="text-xs font-medium text-[#343a40] flex">(*задолжително)</p>
                </div>
                <div className="w-full flex justify-center items-center">

                    <input type="file" accept="image/*" capture="environment" id="imageInput" className="hidden" onChange={handleImageChange} />
                    <img id="capturedImage" style={{ display: "none", maxWidth: 100, maxHeight: 80 }} className="hidden" />

                    <div onClick={captureImage}
                        className="w-[202px] h-[159px] rounded-[10px] bg-[#f9fbfd] flex items-center justify-center"
                        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}>
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none"
                            xmlns="http://www.w3.org/2000/svg" className="w-[72px] h-[72px] relative" preserveAspectRatio="none">
                            <g filter="url(#filter0_i_1297_2293)">
                                <path
                                    d="M9.00001 63C7.35001 63 5.93701 62.412 4.76101 61.236C3.58501 60.06 2.99801 58.648 3.00001 57V21C3.00001 19.35 3.58801 17.937 4.76401 16.761C5.94001 15.585 7.35201 14.998 9.00001 15H18.45L24 9H42V15H26.625L21.15 21H9.00001V57H57V30H63V57C63 58.65 62.412 60.063 61.236 61.239C60.06 62.415 58.648 63.002 57 63H9.00001ZM57 21V15H51V9H57V3H63V9H69V15H63V21H57ZM33 52.5C36.75 52.5 39.938 51.187 42.564 48.561C45.19 45.935 46.502 42.748 46.5 39C46.5 35.25 45.187 32.062 42.561 29.436C39.935 26.81 36.748 25.498 33 25.5C29.25 25.5 26.062 26.813 23.436 29.439C20.81 32.065 19.498 35.252 19.5 39C19.5 42.75 20.813 45.938 23.439 48.564C26.065 51.19 29.252 52.502 33 52.5ZM33 46.5C30.9 46.5 29.125 45.775 27.675 44.325C26.225 42.875 25.5 41.1 25.5 39C25.5 36.9 26.225 35.125 27.675 33.675C29.125 32.225 30.9 31.5 33 31.5C35.1 31.5 36.875 32.225 38.325 33.675C39.775 35.125 40.5 36.9 40.5 39C40.5 41.1 39.775 42.875 38.325 44.325C36.875 45.775 35.1 46.5 33 46.5Z"
                                    fill="#EAEAEA"></path>
                            </g>
                            <defs>
                                <filter id="filter0_i_1297_2293" x="0" y="0" width="72" height="73"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                                    </feBlend>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                    <feOffset dy="1"></feOffset>
                                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1">
                                    </feComposite>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0">
                                    </feColorMatrix>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1297_2293"></feBlend>
                                </filter>
                            </defs>
                        </svg>
                        <p className="text-xs font-medium text-[#343a40]">Take a photo</p>
                    </div>
                </div>
                <div className="my-[35px] flex justify-center">
                    <svg width="348" height="2" viewBox="0 0 348 2" fill="none"
                        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                        <path d="M1 1L347 1.00003" stroke="#CCCCCC" stroke-linecap="round"></path>
                    </svg>
                </div>
                <div className="flex gap-[7px] mb-[29px] items-center">
                    <p className="text-base font-semibold flex text-[#343a40]">Дополнително објаснување</p>
                    <p className="text-xs font-medium flex text-[#343a40]">(*опционално)</p>
                </div>
                <input type="textarea" className="w-full h-28 rounded-[15px] bg-[#f4f4f4]" name='description' value={formData.description} onChange={handleChange} />
                <div className="flex gap-[20px] justify-between items-center mt-[58px] mb-[58px]">
                    <Link to="/"><svg width="64" height="64" viewBox="0 0 64 64" fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" preserveAspectRatio="none">
                        <rect x="1" y="1" width="62" height="62" rx="14" stroke="#343A40" stroke-width="2">
                        </rect>
                        <path
                            d="M40.4714 39.7874C40.5525 39.8667 40.6168 39.9608 40.6607 40.0644C40.7045 40.168 40.7271 40.279 40.7271 40.3911C40.7271 40.5032 40.7045 40.6143 40.6607 40.7178C40.6168 40.8214 40.5525 40.9155 40.4714 40.9948C40.3903 41.0741 40.294 41.137 40.1881 41.1799C40.0822 41.2228 39.9686 41.2449 39.854 41.2449C39.7393 41.2449 39.6258 41.2228 39.5198 41.1799C39.4139 41.137 39.3176 41.0741 39.2365 40.9948L31.9999 33.9179L24.7632 40.9948C24.5994 41.1549 24.3773 41.2449 24.1457 41.2449C23.9142 41.2449 23.6921 41.1549 23.5283 40.9948C23.3646 40.8347 23.2726 40.6176 23.2726 40.3911C23.2726 40.1647 23.3646 39.9475 23.5283 39.7874L30.7661 32.7116L23.5283 25.6357C23.3646 25.4756 23.2726 25.2584 23.2726 25.032C23.2726 24.8056 23.3646 24.5884 23.5283 24.4283C23.6921 24.2682 23.9142 24.1782 24.1457 24.1782C24.3773 24.1782 24.5994 24.2682 24.7632 24.4283L31.9999 31.5052L39.2365 24.4283C39.4003 24.2682 39.6224 24.1782 39.854 24.1782C40.0855 24.1782 40.3076 24.2682 40.4714 24.4283C40.6351 24.5884 40.7271 24.8056 40.7271 25.032C40.7271 25.2584 40.6351 25.4756 40.4714 25.6357L33.2336 32.7116L40.4714 39.7874Z"
                            fill="#343A40"></path>
                    </svg></Link>
                    <Link to="/pollutionReport" state={ formData }><button
                        className="w-[313px] h-16 rounded-[15px] bg-[#79b937] text-lg font-semibold text-center text-white flex justify-center items-center">
                        Потврди
                    </button></Link>
                </div>
            </div>
            <button id="openModal" className="bg-blue-500 text-white py-2 px-4 rounded hidden">Open Modal</button>

            <div id="modal"
                className="modal hidden fixed inset-0 flex items-center justify-center bg-[#aeaeae]/[0.68] px-[16px]">
                <div className="modal-content w-full rounded-[20px] bg-white relative flex justify-center flex-col items-center px-[23px] pt-[27px] pb-[43px]"
                    style={{ boxShadow: "0px 4px 15px 0 rgba(0,0,0,0.15);" }}>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 relative" preserveAspectRatio="none">
                        <path
                            d="M34.4961 44.0001C34.4961 44.6631 34.2328 45.299 33.7639 45.7678C33.2951 46.2367 32.6592 46.5001 31.9961 46.5001C31.3331 46.5001 30.6972 46.2367 30.2284 45.7678C29.7595 45.299 29.4961 44.6631 29.4961 44.0001C29.4961 43.337 29.7595 42.7011 30.2284 42.2323C30.6972 41.7634 31.3331 41.5001 31.9961 41.5001C32.6592 41.5001 33.2951 41.7634 33.7639 42.2323C34.2328 42.7011 34.4961 43.337 34.4961 44.0001ZM31.9961 18.0001C31.4657 18.0001 30.957 18.2108 30.5819 18.5858C30.2069 18.9609 29.9961 19.4696 29.9961 20.0001V36.0001C29.9961 36.5305 30.2069 37.0392 30.5819 37.4143C30.957 37.7893 31.4657 38.0001 31.9961 38.0001C32.5266 38.0001 33.0353 37.7893 33.4104 37.4143C33.7854 37.0392 33.9961 36.5305 33.9961 36.0001V20.0001C33.9961 19.4696 33.7854 18.9609 33.4104 18.5858C33.0353 18.2108 32.5266 18.0001 31.9961 18.0001ZM25.8681 7.61805C28.5321 2.79805 35.4601 2.79805 38.1241 7.61805L59.1101 45.6161C61.6881 50.2801 58.3121 56.0001 52.9841 56.0001H11.0101C5.68015 56.0001 2.30615 50.2801 4.88215 45.6161L25.8681 7.61805ZM34.6221 9.55205C34.3629 9.08266 33.9825 8.69135 33.5207 8.41885C33.0588 8.14634 32.5324 8.00261 31.9961 8.00261C31.4599 8.00261 30.9335 8.14634 30.4716 8.41885C30.0098 8.69135 29.6294 9.08266 29.3701 9.55205L8.38415 47.5501C8.13198 48.0068 8.00329 48.5214 8.01076 49.043C8.01824 49.5647 8.16163 50.0754 8.42678 50.5247C8.69192 50.974 9.06966 51.3464 9.5227 51.6052C9.97575 51.8639 10.4884 52 11.0101 52.0001H52.9841C53.5059 52 54.0186 51.8639 54.4716 51.6052C54.9246 51.3464 55.3024 50.974 55.5675 50.5247C55.8327 50.0754 55.9761 49.5647 55.9835 49.043C55.991 48.5214 55.8623 48.0068 55.6101 47.5501L34.6221 9.55205Z"
                            fill="#F07852"></path>
                    </svg>
                    <p className="text-lg font-semibold text-[#343a40] mt-[24px] mb-[37px]">
                        Дали сте сигурни дека сакате да ја откажете пријавата?
                    </p>
                    <p className="text-base font-medium text-[#525659]">
                        Доколку ја откажете пријавата внесените информации нема да бидат сочувани.
                    </p>
                    <div className="flex justify-between w-full">
                        <button
                            className="w-[165px] h-[45px] rounded-[10px] bg-white border border-[#525659] text-sm font-semibold text-center text-[#525659] flex justify-center items-center">
                            Не сакам
                        </button>
                        <button
                            className="w-[165px] h-[45px] rounded-[10px] bg-[#f07852] text-sm font-semibold text-center text-white justify-center items-center">
                            Сакам
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ReportFrom2
