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

    username() {
        return this._username;
    }

    password() {
        return this._password;
    }

    name() {
        return this._name;
    }

    birthday() {
        return this._birthday;
    }

    age() {
        return this._age;
    }

    height() {
        return this._height;
    }

    wheight() {
        return this._wheight;
    }

    cep() {
        return this._cep;
    }

    city() {
        return this._city;
    }

    state() {
        return this._state;
    }
}