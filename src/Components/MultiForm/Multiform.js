import React, { useState } from 'react';
import Indicator from './Indicator/Indicator';
import CardBegin from './Infos/CardBegin';
import CardEnd from './Infos/CardEnd';
import DietForm from './SubForms/DietForm';
import FoodStyle from './SubForms/FoodStyle';
import Allergies from './SubForms/Allergies';
import Tastes from './SubForms/Tastes';
import "./MultiForm.css";


const Multiform = () => {

    const [formIndex, setFormIndex] = useState(1);
    const [allFormData, setAllFormData] = useState({
        dietform: "",
        foodStyle: [],
        allergies: [],
        prefs: {}
    });

    const modifyIndex = (index, data) => {
        setFormIndex(index);

        if (data) {

            const newData = {...allFormData};
            const firstPropNewData = Object.keys(data)[0];

            newData[firstPropNewData] = data[firstPropNewData];

            setAllFormData(newData);
        }
    };

    const elements = [
        <CardBegin modifyIndex={modifyIndex} />,
        <DietForm modifyIndex={modifyIndex} />,
        <FoodStyle modifyIndex={modifyIndex} />,
        <Allergies modifyIndex={modifyIndex} />,
        <Tastes modifyIndex={modifyIndex} />,
        <CardEnd modifyIndex={modifyIndex} />,
    ];

    return (
        <div className='container-multiform'>
            <Indicator formIndex={formIndex} />

            { elements.map((item, index) => {
                if ((index + 1) === formIndex) {
                    return elements[index];
                }
            })}

            {/* { formIndex === 1 ? <CardBegin modifyIndex={modifyIndex} /> 
            : formIndex === 2 ? <DietForm modifyIndex={modifyIndex} /> 
            : formIndex === 3 ? <FoodStyle modifyIndex={modifyIndex} /> 
            : formIndex === 4 ? <Allergies modifyIndex={modifyIndex} /> 
            : formIndex === 5 ? <Tastes modifyIndex={modifyIndex} /> 
            : formIndex === 6 ? <CardEnd modifyIndex={modifyIndex} /> 
            : "" } */}
            
        </div>
    )
}

export default Multiform;