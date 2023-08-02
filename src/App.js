import React, { useState } from 'react';

const App = () => {
    const [Clicked, setClicked] = useState(false);

    function Click() {
        setClicked(!Clicked);
    };

    let bgColor;
    let btnText;

    if (Clicked) {
        bgColor = '#BACA18';
        btnText = 'Again !!';
    }
    else {
        bgColor = '#E4836E';
        btnText = 'Click Me';
    }
    return (
        <div className="main" style={{backgroundColor: bgColor}}>
            <h1>Click this button to change the Color!!</h1>
            <button style={{ backgroundColor: Clicked ? '#E4836E' : '#BACA18', }} onClick={Click}>
              {btnText}
            </button>
        </div>
    );
};

export default App;