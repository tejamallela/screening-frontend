import { useEffect, useState } from "react";
import { getAppointments } from "../Services/Appointments/AppointmentsService";
import { Appointment } from "../Types/Appointments/Appointments";
import { AppointmentItem } from "../components/AppointmentItem";

export function PageAppointments() {
    const [appointmentList, setAppointmentList] = useState<Appointment[]>([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const appointments = await getAppointments();
                setAppointmentList(appointments);
            } catch (error) {
                // Handle error
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, []);
    const titles = ["Patients", "Date", "Time", "Doctor", "Injury", "Action"];
    return (
        <div >
            <table className="table-auto border-collapse border border-blue-1600 rounded">
                <thead>
                    <tr>
                        {titles.map((title, index) => (
                            <th key={index} className="px-4 py-2 border border-gray-1600 text-gray-500 font-semibold">{title.toUpperCase()}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {appointmentList.map((appointment, index) => (
                        <AppointmentItem key={index} {...appointment} />
                    ))}
                </tbody>
            </table>

    </div>
    )
}