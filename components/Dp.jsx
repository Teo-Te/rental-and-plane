'use client'
import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

const Dp = () => { 

    const [value, setValue] = useState({ 

        startDate: new Date(), 
        endDate: new Date().setMonth(11) 

    }); 

    const handleValueChange = (newValue) => {
        setValue(newValue); 

    } 

    return (
        <div>
            <Datepicker className="opacity-100"
            useRange={false}
            asSingle={true}
            placeholder={"Data e nisjes"}
            value={value} 
            onChange={handleValueChange} 
            inputClassName={"input input-bordered join-item"}
            containerClassName={"relative z-50"}
            />
        </div>

    );
}; 
export default Dp;