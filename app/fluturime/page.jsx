"use client"
import Dp from "@/components/Dp"
import Dp2 from "@/components/Dp2"
import {useState} from "react";

export default function Fluturime() {
    const [quantity, handleQuantityChange] = useState(0);
    const [quantity2, handleQuantityChange2] = useState(0);
    const [quantity3, handleQuantityChange3] = useState(0);
    const [isReturn, setIsReturn] = useState(false);

    const incrementQuantity = () => {
        handleQuantityChange(quantity + 1);
      };
    
      const decrementQuantity = () => {
        if (quantity > 0){
            handleQuantityChange(quantity - 1);
        }
      };
    
      const incrementQuantity2 = () => {
        handleQuantityChange2(quantity2 + 1);
      };
    
      const decrementQuantity2 = () => {
        if (quantity2 > 0){
            handleQuantityChange2(quantity2 - 1);
        }
      };

      const incrementQuantity3 = () => {
        handleQuantityChange3(quantity3 + 1);
      };
    
      const decrementQuantity3 = () => {
        if (quantity3 > 0){
            handleQuantityChange3(quantity3 - 1);
        }
      };
    
    return (
        <>
        <div className="hero min-h-fit" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-full">
                    <h1 className="mb-5 text-5xl font-bold">Fluturime</h1>
                    <p className="mb-5">Prenotoni fluturimin tuaj</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-full bg-base-200">
            <div className="divider divider-neutral"></div>
        </div>
        <div className="flex flex-col join justify-center bg-base-200 pt-2 pb-2">
            <div className="flex w-full justify-center pb-2">
                <button onClick={() => setIsReturn(false)} className="btn btn-secondary">Vajtje</button>
                    <div className="divider divider-horizontal"></div>
                <button onClick={() => setIsReturn(true)} className="btn btn-secondary">Vajtje-Ardhje</button>
            </div>
            <div className="flex join w-full p-2 justify-center">
                <div>
                    <div className="flex flex-col">
                        <input className="input input-bordered join-item w-full" placeholder="Nisja"/>
                    </div>
                </div>
                <div>
                    <div>
                        <input className="input input-bordered join-item w-full" placeholder="Destinacioni"/>
                    </div>
                </div>
            </div>
            <div className="flex join p-2 justify-center">
                <div className="flex flex-col w-full">
                    <Dp/>
                </div>
                {isReturn &&
                <div className="w-full">
                    <Dp2/>
                </div>
                }
            </div>
            <div className="flex flex-row w-full justify-center items-center p-2 sm:px-5 pt-4">
                <div className="sm:pr-12">
                    <div>
                        <div className="flex flex-col">
                            <input className="input input-bordered join-item w-full" placeholder="Emri"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input className="input input-bordered join-item w-full" placeholder="Mbiemri"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input className="input input-bordered join-item w-full" placeholder="Nr. i celularit"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center space-y-2 p-2">
                    <div className="flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10 pr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                        <div className="flex join border-white border border-solid">
                            <button className="join-item btn btn-ghost" onClick={decrementQuantity}>-</button>
                            <input type="text" readOnly value={quantity} className="join-item w-5 bg-inherit pl-2"></input>
                            <button className="join-item btn btn-ghost" onClick={incrementQuantity}>+</button>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 128 128" className="w-10 h-10 pr-2" id="mothers"><path d="M86 77c-5.51 0-10-4.49-10-10s4.49-10 10-10 10 4.49 10 10-4.49 10-10 10zm0-14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM44 27c-7.17 0-13-5.83-13-13S36.83 1 44 1s13 5.83 13 13-5.83 13-13 13zm0-20c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"></path><path d="m105.95 107.46-1.76-9.67c-1.58-8.67-8.52-15.22-17.27-16.28-10.71-1.3-18.97-9.7-20.08-20.42l-1.09-10.43A21.876 21.876 0 0 0 43.94 31C31.84 31 22 40.84 22 52.94V77c0 3.91 2.51 7.25 6 8.49V95c0 3.31 2.69 6 6 6h.22l1.79 23.23A2.999 2.999 0 0 0 39 127c.08 0 .16 0 .23-.01a3 3 0 0 0 2.76-3.22L40.24 101h7.52l-1.75 22.77A3 3 0 0 0 49 127c1.55 0 2.87-1.2 2.99-2.77L53.78 101H54c3.31 0 6-2.69 6-6V78c0-1.66-1.34-3-3-3s-3 1.34-3 3v17H34V83c0-1.66-1.34-3-3-3-1.65 0-3-1.35-3-3V52.94C28 44.15 35.15 37 43.94 37c8.19 0 15 6.14 15.85 14.28l1.09 10.43c.9 8.62 5.46 16.03 12.13 20.71V98c0 3.62 1.49 6.9 3.89 9.26l1.12 16.93c.1 1.59 1.42 2.81 2.99 2.81.06 0 .13 0 .19-.01 1.65-.1 2.91-1.53 2.81-3.18l-.82-13.13c.91.2 1.85.32 2.83.32h2.81l-.8 12.81a3 3 0 0 0 2.81 3.18c.06 0 .13.01.19.01 1.57 0 2.89-1.22 2.99-2.81l1-16c.05-.83-.24-1.64-.81-2.24S92.83 105 92 105h-6c-3.86 0-7-3.14-7-7V85.66c2.27.89 4.68 1.51 7.2 1.81 6.13.74 10.99 5.32 12.09 11.39l1.76 9.67a2.997 2.997 0 0 0 3.49 2.41c1.63-.28 2.71-1.85 2.41-3.48z"></path></svg>
                        <div className="flex join border-white border border-solid">
                            <button className="join-item btn btn-ghost" onClick={decrementQuantity2}>-</button>
                            <input type="text" readOnly value={quantity2} className="join-item w-5 bg-inherit pl-2"></input>
                            <button className="join-item btn btn-ghost" onClick={incrementQuantity2}>+</button>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 pr-2" color="#ffffff" fill="none">
                            <circle cx="12" cy="8" r="6" stroke="currentColor" stroke-width="1.5" />
                            <path d="M16.874 12C17.5826 13.037 18 14.3093 18 15.6842C18 16.5017 17.8524 17.2829 17.5838 18M7.12605 12C6.41738 13.037 6 14.3093 6 15.6842C6 19.1723 8.68629 22 12 22C14.5371 22 16.7064 20.3424 17.5838 18M17.5838 18C14.8509 16.8 12.0559 14.8333 11 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M12.0002 2C11.0061 2 10.2002 2.7835 10.2002 3.75C10.2002 4.7165 11.0061 5.5 12.0002 5.5C12.4612 5.5 12.8817 5.3315 13.2002 5.0544" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M10 8H10.0081M14 8H14.0081" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        <div className="flex join border-white border border-solid">
                            <button className="join-item btn btn-ghost" onClick={decrementQuantity3}>-</button>
                            <input type="text" readOnly value={quantity3} className="join-item w-5 bg-inherit pl-2"></input>
                            <button className="join-item btn btn-ghost" onClick={incrementQuantity3}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-4">
                <button className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                    <span className="pl-2">Prenoto!</span>
                </button>
            </div>
        </div>
        </>
    )
}