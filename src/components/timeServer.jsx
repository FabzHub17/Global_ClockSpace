import { DateTime } from "luxon";
import { getTimeZones, rawTimeZones, timeZonesNames, abbreviations } from "@vvo/tzdb";

const now = DateTime.now();


function getAllZones() {
    return (timeZonesNames);
}

function getZoneTime(zone) {
    const now2 = DateTime.now();
    return (
        now2.setZone(zone).toLocaleString(DateTime.DATETIME_MED)
    );
}


// function getDefaultZone() {
//     let defaultZone = moment().tz.setDefault(String);
//     return (defaultZone);
// }

export { getAllZones, getZoneTime };