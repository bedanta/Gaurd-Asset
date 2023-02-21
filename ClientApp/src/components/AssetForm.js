import React from "react";
import './Home.css';

function AssetForm(props) {
    const initialState = { itemName: "", itemValue: "", categoryIndex: 0 }
    const [state, setState] = React.useState(initialState);

    const handleSubmit = evt => {
        evt.preventDefault();
        if (!state || !state.itemName || !state.itemValue) {
            alert("Input Fields Cannot Be Empty")
            return
        };
        // Item Value is chosen to be zero if it is a negative value
        let itemValue = parseInt(state.itemValue)
        props.addAsset(state.itemName, itemValue >= 0 ? itemValue : 0, props.categories[state.categoryIndex]);
        setState(initialState);
    };

    const handleChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    return (
        <form className="form-box" onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                name="itemName"
                placeholder="Item Name"
                value={state.itemName}
                onChange={handleChange}
                data-testid="input-name"
            />
            <input
                type="number"
                min="0"
                className="input"
                name="itemValue"
                placeholder="Item Value"
                value={state.itemValue}
                onChange={handleChange}
                data-testid="input-value"
            />
            <select name="categoryIndex" onChange={handleChange} value={state.category}>
                {props.categories.map((category, index) => (
                    <option key={index} value={index}>{category}</option>
                ))}
            </select>
            <input
                type="submit"
                value="Add"
            />
        </form>
    );
}

export default AssetForm;