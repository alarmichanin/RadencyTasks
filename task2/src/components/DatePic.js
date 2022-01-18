import { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import Icon from "react-multi-date-picker/components/icon";

const DatePic = (props) => {
    const [value, setValue] = useState([]);
    useEffect(() => {
        if (props.onChange) {
            props.onChange(value)
        }
    })
    return (
        <div className="DatePic">
            <DatePicker
                value={value}
                render={<Icon />}
                editable={false}
                format={"MM/DD/YYYY"}
                onChange={(array) => {
                    setValue(array.length > 2 ? [...value] : array)
                }}
                multiple
            />
        </div>
    );
}

export default DatePic;