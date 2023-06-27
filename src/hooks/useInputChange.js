import { useState } from "react";

const useInputChange = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    return { values, handleChange };
};

export default useInputChange;
