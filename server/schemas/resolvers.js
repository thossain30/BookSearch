const { Book , User } = require("../models");

const resolvers = {
    Query: {
        me: async () => {
            return await Book.find({});
        }
    }
}

module.exports = resolvers;