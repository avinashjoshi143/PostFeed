import React from "react";
import Spinner from '../../assets/Spinner.gif';

export const spinner = () => {
    return (
        <div>
            <img
                src={Spinner}
                style={{ width: '340px', margin: 'auto', display: 'block' }}
                alt="Loading..."
            />
        </div>
    );
};

export default spinner;