const User = require('./user')

class Doctor extends User {
    constructor(name, birthMonth, birthDay, birthYear) {
        super(name, birthMonth, birthDay, birthYear)
        this.acceptedInsurance = [];

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
}

module.exports = Doctor;
