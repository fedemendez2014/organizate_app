export default class ReservationModel {
    id;
    time;
    date;
    customer;
    services;
    constructor() {
        this.id = 0;
        this.time = null;
        this.date = null;
        this.customer = null;
        this.services = [];
    }
}