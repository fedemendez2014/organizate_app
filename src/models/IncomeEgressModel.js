import moment from "moment/min/moment-with-locales";

export default class IncomeEgressModel {
    id;
    reason;
    amount;
    type;
    date;
    constructor() {
        this.id = 0;
        this.reason = '';
        this.amount = '';
        this.type = '';
        this.date = moment();
    }
}