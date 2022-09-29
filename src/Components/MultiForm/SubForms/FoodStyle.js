import React, { useRef , useEffect } from 'react';
import './SubForm.css';


const FoodStyle = (props) => {

    const preventFunc = e => {

        e.preventDefault();

        const styleData = {
            foodStyle: []
        };

        allCheckBoxes.current.forEach(checkbox => {
            if (checkbox.checked) {
                styleData.foodStyle.push(checkbox.value);
            }
        });

        props.modifyIndex(4, styleData);
    };

    const handleReturn = () => {
        props.modifyIndex(2);
    };

    const allCheckBoxes = useRef([]);

    const addCheck = el => {
        if (el && !allCheckBoxes.current.includes(el)) {
            allCheckBoxes.current.push(el);
        }
    };

    return (
        <form
        className='checkbox-form'
        onSubmit={preventFunc}>
            
            <p>Quelles sont tes cuisines préférées ?</p>
            <span>Choix multiples.</span>

            <label htmlFor="italian">Italienne</label>
            <input 
                type="checkbox" 
                id="italian"
                value="italian"
                ref={addCheck}
            />

            <label htmlFor="japanese">Japonaise</label>
            <input 
                type="checkbox" 
                id="japanese"
                value="japanese"
                ref={addCheck}
            />

            <label htmlFor="indian">Indienne</label>
            <input 
                type="checkbox" 
                id="indian"
                value="indian"
                ref={addCheck}
            />

            <label htmlFor="thai">Thaïlandaise</label>
            <input 
                type="checkbox" 
                id="thai"
                value="thai"
                ref={addCheck}
            />

            <label htmlFor="french">Française</label>
            <input 
                type="checkbox" 
                id="french"
                value="french"
                ref={addCheck}
            />

            <label htmlFor="chinese">Chinoise</label>
            <input 
                type="checkbox" 
                id="chinese"
                value="chinese"
                ref={addCheck}
            />

            <div className="container-nav-btns">
                <button 
                    type='button' 
                    className='prev'
                    onClick={handleReturn}
                >
                Précédent
                </button>
                <button>Valider</button>
            </div>

        </form>
    );
};

export default FoodStyle;