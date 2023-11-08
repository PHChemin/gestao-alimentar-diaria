export class User {
    constructor (username, password, name, birthday, age, height, wheight, cep, city, state){
        this._username = username;
        this._password = password;
        this._name = name;
        this._birthday = birthday;
        this._age = age;
        this._height = height;
        this._wheight = wheight;
        this._cep = cep;
        this._city = city;
        this._state = state;
    }

    getUsername() {
        return this._username;
    }

    getPassword() {
        return this._password;
    }

    getName() {
        return this._name;
    }

    getBirthday() {
        return this._birthday;
    }

    getAge() {
        return this._age;
    }

    getHeight() {
        return this._height;
    }

    getWheight() {
        return this._wheight;
    }

    getCep() {
        return this._cep;
    }

    getCity() {
        return this._city;
    }

    getState() {
        return this._state;
    }
}