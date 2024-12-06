const Employee = require("../models/employee");

const Query = {
   employees: async (_, { filter, sort, limit, offset }) => {
      const query = filter ? { name: { $regex: filter, $options: "i" } } : {};
      return Employee.find(query).sort(sort).skip(offset).limit(limit);
   },
   employee: async (_, { id }) => {
      return Employee.findById(id);
   },
};

module.exports = Query;
