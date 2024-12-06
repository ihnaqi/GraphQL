const Employee = require("../models/employee");

const Mutation = {
   addEmployee: async (
      _,
      { id, name, age, class: className, subjects, attendance },
   ) => {
      const employee = new Employee({
         id,
         name,
         age,
         class: className,
         subjects,
         attendance,
      });
      return employee.save();
   },
   updateEmployee: async (
      _,
      { id, name, age, class: className, subjects, attendance },
   ) => {
      return Employee.findByIdAndUpdate(
         id,
         { name, age, class: className, subjects, attendance },
         { new: true },
      );
   },
};

module.exports = Mutation;
