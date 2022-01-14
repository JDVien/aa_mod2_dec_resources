class User {
    constructor(name, birthMonth, birthDate, birthYear) {
        this.name = name;
        this.birthDay = new Date(birthYear, birthMonth-1, birthDate)
        this.birthMonth = birthMonth;
        this.birthYear = birthYear;
    }
    getBirthday() {
        return this.birthDay.toDateString();
    }

    getAge() {
        const today = new Date();
        let age = today.getFullYear() - this.birthDay.getFullYear();
        if (today.getMonth() < this.birthDay.getMonth() || today.getMonth() === this.birthDay.getMonth() && today.getDate() < this.birthDay.getDate())
            age--;
        return age;
    }

    //getMonth() and getFullYear() are library methods that can be invoked
}

module.exports = User;
