import { Patient } from './patient';
import { Doctor } from './doctor'
type Time = {
    hours: number;
    minutes: number;
};

export class Appointment {
    id: number;//madhura
 //   patientId: number;
 //   doctorId: number;
    name: string;
    surname: string;
    mobNo: string;
    status: number;
    time: Time["hours"];
    date: Date;
    patient : Patient;
    doctor : Doctor
}