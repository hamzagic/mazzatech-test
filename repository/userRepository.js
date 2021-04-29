const user = require('../models/User');

class User {
    constructor() {
        this.user = user;
    }

    async createUser(name, amount, date) {
        this.data = new user({
            name,
            amount,
            date
        });

        await this.data.save();
        return this.data;
    }

    async getAllUsers() {
        this.data = await user.find();
        return this.data;
    }

    async getByName(name) {
        this.data = await user.find({name: { $regex: '.*' + name + '.*', $options: 'i' } });
        return this.data;
    }

    async sortByName() {
        this.data = await user.find({}).sort({name: 'asc'});
        return this.data;
    }

    async sortByAmount() {
        this.data = await user.find({}).sort({amount: 'asc'});
        return this.data;
    }

    async sortByDate() {
        this.data = await user.find({}).sort({date: 'asc'});
        return this.data;
    }
}

module.exports = User;