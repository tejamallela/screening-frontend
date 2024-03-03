import { Appointment } from "../Types/Appointments/Appointments";
import moment from "moment";

function formatDate(date: string) {
    return moment(date).format("DD MMM YYYY");
}

function formatTime(time: string) {
    return moment(time, 'hh:mm A').format('HH:mm');
}
export function AppointmentItem({
    patient_name, mobile_number, appointment_time, appointment_date, doctor, injury
}: Appointment) {
    return (
        <tr>
            <td className="px-4 py-2 flex flex-col">
                <div className="font-bold"> {patient_name} </div>
                <div className="text-gray-700"> +{mobile_number} </div>
            </td>
            <td className="px-4 py-2 font-semibold text-gray-500">
                {formatDate(appointment_date)}
            </td>
            <td className="px-4 py-2 font-semibold text-gray-500">
                {formatTime(appointment_time)}
            </td>
            <td className="px-4 py-2 font-semibold text-gray-500">{doctor}</td>
            <td className="px-4 py-2">
                <div className="p-1 bg-blue-300 rounded font-semibold text-gray-1000">
                {injury}
                </div>
                </td>
            <td className="px-4 py-2">:</td>
        </tr>
    );
}