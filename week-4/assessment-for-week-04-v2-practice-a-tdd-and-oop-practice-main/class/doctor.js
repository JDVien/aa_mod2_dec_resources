const User = require('./user')

class Doctor extends User {
    constructor(name, birthMonth, birthDay, birthYear) {
        super(name, birthMonth, birthDay, birthYear)
        this.acceptedInsurance = [];
        this.appointments = [];

    }
    acceptsInsurance(insuranceCo) {
        return this.acceptedInsurance.includes(insuranceCo);
    }
    addInsurance(insuranceCo) {
        if (!this.acceptedInsurance.includes(insuranceCo)) {
            this.acceptedInsurance.push(insuranceCo);
        }
    }

    removeInsurance(insuranceCo) {
        this.acceptedInsurance.splice(this.acceptedInsurance.indexOf(insuranceCo), 1);
    }

    addAppointment(appointment) {
        for (let madeAppointment of this.appointments) {
            if (madeAppointment.date.toString() === appointment.date.toString()) {
                return false;
            }
        }
        this.appointments.push(appointment)
    }
}

module.exports = Doctor;
