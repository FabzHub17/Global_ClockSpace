import "./_form.scss";
import { getAllZones, getZoneTime } from "../timeServer";
import { useState, useEffect, useRef } from "react";
let zones = getAllZones();


function Form() {
    const [selectedValue, setSelectedValue] = useState(zones[0]);
    const [selectedTime, setSelectedTime] = useState("select a time zone and hit Get Time");
    const intervalRef = useRef(null);

    const handleChange = e => {
        setSelectedValue(e.target.value);
        intervalRef.current = e.target.value; // this is to keep track for the setInterval function.For some...
        // reason it gets the default value after rendering, but this fixes it.
    }

    //useEffect is used normally to contain setInterval functions.
    useEffect(() => {
        const intervalTime = setInterval(() => {
            setSelectedTime(getZoneTime(intervalRef.current));
        }, 1000);
        return () => clearInterval(intervalTime);
    }, []);

    return (
        <>
            <div className="form">
                <label className="form__label">
                    Country/City
                    <select name="zones-select" className="form__select" onChange={handleChange}>
                        {zones.map((zone, _index) => {
                            return (
                                <option className="form__option" value={zone} key={_index}>
                                    {zone}
                                </option>
                            );
                        })}
                    </select>
                </label>
                <button
                    className="form__btn"
                    onClick={() => {
                        setSelectedTime(getZoneTime(selectedValue));
                    }}
                >
                    Get Time
                </button>
                <h1 id="display_time">{selectedTime}, {selectedValue}</h1>
            </div>

        </>
    );
}

export default Form;
