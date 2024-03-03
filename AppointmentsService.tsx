import axios, { AxiosResponse } from "axios";
import { Appointment } from "../../Types/Appointments/Appointments";

const baseUrl = "https://gist.githubusercontent.com";

const api = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getAppointments = async (): Promise<Appointment[]> => {
    try {
        const response: AxiosResponse<any> = await api.get("/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json");
        var appointments: Appointment[] = response.data.appointments;
        return appointments;
    } catch (error) {
        // Handle error
        throw error;
    }
};
