import React, { useState } from "react";
import "../css/Counter.css"

const Counter = () => {
const [count, setCount] = useState(0);

const incrementCount = () => {
    setCount(count + 1);
};

const decrementCount = () => {
    if (count > 0) {
    setCount(count - 1);
    }
};

return (
    <div className="counter-container">
    <div className="count-text">Hitungan saat ini: {count}</div>
    <div className="button-container">
    <button className="button" onClick={incrementCount}>
        Tambah
    </button>
    <button className="button" onClick={decrementCount}>
        Kurang
    </button>
    </div>
</div>
);
};

export default Counter;
