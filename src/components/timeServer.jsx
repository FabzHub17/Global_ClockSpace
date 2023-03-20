import { DateTime } from "luxon";
import { getTimeZones, rawTimeZones, timeZonesNames, abbreviations } from "@vvo/tzdb";




function getAllZones() {
    return (timeZonesNames);
}

function getZoneTime(zone) {
    const now2 = DateTime.now();
    return (
        now2.setZone(zone).toLocaleString(DateTime.DATETIME_MED)
    );
}

function getZoneDefault() {
    const dt = DateTime.now();
    return (
        dt.zoneName
    );
}

// function getCurrentTime() {
//     const now = DateTime.now();
//     return (
//         now.toLocaleString(DateTime.DATETIME_MED)
//     );
// }


export { getAllZones, getZoneTime, getZoneDefault };