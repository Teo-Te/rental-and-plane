'use client'
import { useRef } from 'react';

export default function Mercedes() {
    const carouselRef = useRef(null);

    const handleSlideClick = (slideId, event) => {
        event.preventDefault();
        const slideElement = document.getElementById(slideId);
        if (slideElement) {
            slideElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <>
            <div className="flex flex-col sm:grid sm:grid-cols-2 items-center">
                <div className='pt-10'>
                <div className="carousel carousel-center max-w-md sm:max-w-xl p-4 space-x-4" ref={carouselRef}>
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="/mercedes.jpg" className="w-full" />
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="/mercedes2.jpg" className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full sm:max-w-xl py-2 gap-2">
                    <a href="#slide1" className="btn btn-xs" onClick={(event) => handleSlideClick('slide1', event)}>
                        1
                    </a>
                    <a href="#slide2" className="btn btn-xs" onClick={(event) => handleSlideClick('slide2', event)}>
                        2
                    </a>
                </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="flex text-2xl pb-6 pt-4 sm:pb-10 font-bold text-white">Mercedes Benz E Class</h2>
                    <div className='flex items-center'>
                    <div className='grid grid-cols-2 px-2'>
                        <div className="flex flex-col space-y-2">
                            <div className="flex text-lg items-center pt-2 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>
                                <span className="flex pl-2">Viti i Prodhimit ❯</span>
                            </div>
                            <div className="flex text-lg items-center pt-2 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                <path d="M10.4626 13L9.06858 14.8124C8.91919 15.0066 9.02626 15.2861 9.26987 15.3378L10.7301 15.6477C10.9899 15.7028 11.0889 16.0122 10.9073 16.2011L9.17773 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M4 21L4 9C4 6.17157 4 4.75736 4.87868 3.87868C5.75736 3 7.17157 3 10 3C12.8284 3 14.2426 3 15.1213 3.87868C16 4.75736 16 6.17157 16 9L16 21H4Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M2 21H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M16 14H17.6667C17.9767 14 18.1317 14 18.2588 14.0341C18.6039 14.1265 18.8735 14.3961 18.9659 14.7412C19 14.8683 19 15.0233 19 15.3333V16.5C19 17.3284 19.6716 18 20.5 18C21.3284 18 22 17.3284 22 16.5V10.2111C22 9.60998 22 9.30941 21.9142 9.02598C21.8284 8.74255 21.6616 8.49247 21.3282 7.9923L20.5547 6.83205C20.2082 6.31223 19.6247 6 19 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                            </svg>
                                <span className="flex pl-2">Karburanti ❯ </span>
                            </div>
                            <div className="flex text-lg items-center pt-2 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" id="transmission"><path fill="white" fill-rule="evenodd" d="M4 5.25C4.41421 5.25 4.75 5.58579 4.75 6V11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H16C16.964 11.25 17.6116 11.2484 18.0946 11.1835C18.5561 11.1214 18.7536 11.0142 18.8839 10.8839C19.0142 10.7536 19.1214 10.5561 19.1835 10.0946C19.2484 9.61157 19.25 8.96401 19.25 8V6C19.25 5.58579 19.5858 5.25 20 5.25C20.4142 5.25 20.75 5.58579 20.75 6V8.05199C20.75 8.95048 20.7501 9.6997 20.6701 10.2945C20.5857 10.9223 20.4 11.4891 19.9445 11.9445C19.4891 12.4 18.9223 12.5857 18.2945 12.6701C17.6997 12.7501 16.9505 12.75 16.052 12.75L12.75 12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H4.75V18C4.75 18.4142 4.41421 18.75 4 18.75C3.58579 18.75 3.25 18.4142 3.25 18V6C3.25 5.58579 3.58579 5.25 4 5.25Z" clip-rule="evenodd"></path><path fill="white" fill-rule="evenodd" d="M4 2.75C3.30964 2.75 2.75 3.30964 2.75 4 2.75 4.69036 3.30964 5.25 4 5.25 4.69036 5.25 5.25 4.69036 5.25 4 5.25 3.30964 4.69036 2.75 4 2.75zM1.25 4C1.25 2.48122 2.48122 1.25 4 1.25 5.51878 1.25 6.75 2.48122 6.75 4 6.75 5.51878 5.51878 6.75 4 6.75 2.48122 6.75 1.25 5.51878 1.25 4zM4 18.75C3.30964 18.75 2.75 19.3096 2.75 20 2.75 20.6904 3.30964 21.25 4 21.25 4.69036 21.25 5.25 20.6904 5.25 20 5.25 19.3096 4.69036 18.75 4 18.75zM1.25 20C1.25 18.4812 2.48122 17.25 4 17.25 5.51878 17.25 6.75 18.4812 6.75 20 6.75 21.5188 5.51878 22.75 4 22.75 2.48122 22.75 1.25 21.5188 1.25 20zM12 18.75C11.3096 18.75 10.75 19.3096 10.75 20 10.75 20.6904 11.3096 21.25 12 21.25 12.6904 21.25 13.25 20.6904 13.25 20 13.25 19.3096 12.6904 18.75 12 18.75zM9.25 20C9.25 18.4812 10.4812 17.25 12 17.25 13.5188 17.25 14.75 18.4812 14.75 20 14.75 21.5188 13.5188 22.75 12 22.75 10.4812 22.75 9.25 21.5188 9.25 20zM12 2.75C11.3096 2.75 10.75 3.30964 10.75 4 10.75 4.69036 11.3096 5.25 12 5.25 12.6904 5.25 13.25 4.69036 13.25 4 13.25 3.30964 12.6904 2.75 12 2.75zM9.25 4C9.25 2.48122 10.4812 1.25 12 1.25 13.5188 1.25 14.75 2.48122 14.75 4 14.75 5.51878 13.5188 6.75 12 6.75 10.4812 6.75 9.25 5.51878 9.25 4zM20 2.75C19.3096 2.75 18.75 3.30964 18.75 4 18.75 4.69036 19.3096 5.25 20 5.25 20.6904 5.25 21.25 4.69036 21.25 4 21.25 3.30964 20.6904 2.75 20 2.75zM17.25 4C17.25 2.48122 18.4812 1.25 20 1.25 21.5188 1.25 22.75 2.48122 22.75 4 22.75 5.51878 21.5188 6.75 20 6.75 18.4812 6.75 17.25 5.51878 17.25 4zM17.25 15C17.25 14.5858 17.5858 14.25 18 14.25H20.2857C21.6612 14.25 22.75 15.3839 22.75 16.75 22.75 17.8285 22.0713 18.7624 21.1086 19.1077L22.6396 21.6084C22.8559 21.9616 22.7449 22.4234 22.3916 22.6396 22.0384 22.8559 21.5766 22.7449 21.3604 22.3916L19.4369 19.25H18.75V22C18.75 22.4142 18.4142 22.75 18 22.75 17.5858 22.75 17.25 22.4142 17.25 22V15zM18.75 17.75H20.2857C20.8038 17.75 21.25 17.3169 21.25 16.75 21.25 16.1831 20.8038 15.75 20.2857 15.75H18.75V17.75z" clip-rule="evenodd"></path></svg>
                                <span className="flex pl-2">Transmetuesi ❯</span>
                            </div>
                            <div className="flex text-lg items-center pt-2 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="memory-seat"><g><path fill="white" d="M23 5L23 5c-1.8527.6176-3.2271 2.1879-3.5938 4.106l-.5264 2.7535c-.3172 1.6591.0077 3.3767.9088 4.8053l.0229.0363c.1233.1955.2978.3535.5046.4569l0 0c.8041.4021 1.7594-.1388 1.8283-1.0352L23 5zM22 20l-9.8515-2.111C9.5618 17.3347 6.8706 18.1294 5 20l0 0 2 2h13L22 20z"></path></g></svg>
                                <span className="flex pl-2">Numri i Vendeve ❯</span>
                            </div>
                            <div className="flex text-lg items-center pt-2 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span className="flex pl-2">Cmimi ❯</span>
                            </div>
                        </div>  
                        <div className='flex flex-col space-y-2'>
                            <p className='text-lg font-bold pt-2 pl-10 text-gray-200'>2016</p>
                            <p className='text-lg font-bold pt-2 pl-10 text-gray-200'>Nafte</p>
                            <p className='text-lg font-bold pt-2 pl-10 text-gray-200'>Automatik</p>
                            <p className='text-lg font-bold pt-2 pl-10 text-gray-200'>5</p>
                            <p className='text-lg font-bold pt-2 pl-10 text-gray-200'>€ 50/dita</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <form className='px-4 pt-8 sm:grid sm:grid-cols-2 sm:pb-8 sm:space-y-2 sm:justify-center'>
                <div></div>
                <div className="relative mt-3 z-0 w-full sm:w-72 group">
                    <input
                    type="text"
                    required
                    name="name_surname" id="name_surname" className="block py-2.5 px-0 w-full text-sm sm:text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" "
                    />
                    <label htmlFor="name_surname" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Emri, Mbiemri:
                    </label>
                </div>
                <br />
                <div className="relative z-0 w-full sm:w-72 group">
                    <input
                    type="text"
                    required
                    name="phone_num" id="phone_num" className="block py-2.5 px-0 w-full text-sm sm:text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" "
                    />
                    <label htmlFor="phone_num" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Nr. Telefonit:
                    </label>
                </div>
                <br />
            </form>
            <div className='flex sm:grid sm:grid-cols-2 justify-center items-center'>
                <div></div>
            <button type="submit" className="btn btn-sm sm:btn-md glass flex justify-center p-2 font-semibold text-black bg-white hover:bg-gray-400 rounded-lg text-sm w-1/3 px-4 sm:px-5 py-1 sm:py-2.5 text-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                <span>Rezervo</span>
            </button>
            </div>
        </>
    );
}
