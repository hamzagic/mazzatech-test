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

    async getAllUsers(offset, limit) {
        this.total = await user.countDocuments();
        this.data = await user.find({}).skip(offset).limit(limit);

        return [this.data, this.total];
    }

    async getByName(name, offset, limit) {
        this.data = await user.find({name: { $regex: '.*' + name + '.*', $options: 'i' } }).skip(offset).limit(limit);
        this.total = await user.find({name: { $regex: '.*' + name + '.*', $options: 'i' } }).countDocuments();
        return [this.data, this.total];
    }

    async sortByName(offset, limit) {
        this.total = await user.countDocuments();
        this.data = await user.find({}).sort({name: 'asc'}).skip(offset).limit(limit);
        return [this.data, this.total];
    }

    async sortByAmount(offset, limit) {
        this.total = await user.countDocuments();
        this.data = await user.find({}).sort({amount: 'asc'}).skip(offset).limit(limit);
        return [this.data, this.total];
    }

    async sortByDate(offset, limit) {
        this.total = await user.countDocuments();
        this.data = await user.find({}).sort({date: 'asc'}).skip(offset).limit(limit);
        return [this.data, this.total];
    }
}

module.exports = User;