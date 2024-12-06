const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Employee {
    id: ID!
    name: String!
    age: Int!
    class: String!
    subjects: [String]!
    attendance: Float!
  }

  type Query {
    employees(
      filter: String
      sort: String
      limit: Int
      offset: Int
    ): [Employee]!
    employee(id: ID!): Employee
  }

  type Mutation {
    addEmployee(
      id: ID!
      name: String!
      age: Int!
      class: String!
      subjects: [String]!
      attendance: Float!
    ): Employee
    updateEmployee(
      id: ID!
      name: String
      age: Int
      class: String
      subjects: [String]
      attendance: Float
    ): Employee
  }
`;

module.exports = typeDefs;
