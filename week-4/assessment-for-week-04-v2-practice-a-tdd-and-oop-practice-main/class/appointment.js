const User = require("../class/user");
const Doctor = require("../class/doctor");
const Patient = require("../class/patient");
const { doc } = require("mocha/lib/reporters");
class Appointment {
    constructor (doctor, patient, month, date, year, hour) {
        this.doctor = doctor
        this.patient =patient
        this.month = month
        this.date = date
        this.year = year
        this.hour = hour

        const now = new Date()

        if (this.date < now) {
            throw new AppointmentError("Appointment must be in the future")
        }

        if (hour < 8 || hour > 17) {
            throw new AppointmentError("Invalid time slot")
        }

        if (!doctor.acceptsInsurance(patient.insurance)) {
            throw new AppointmentError("Patient's insurance not supported")
        }

        if (!doctor.addAppointment(this)){
            throw new AppointmentError("Invalid time slot")
        }

    }

}

class AppointmentError extends Error {
    constructor(message) {
        super(message)
        this.name = "AppointmentError"
    }
}

module.exports = [Appointment, AppointmentError]
