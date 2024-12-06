const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();

app.listen({ port: process.env.PORT || 4500 }, () => {
  console.log(
    `🚀 Server is running on http://localhost:${process.env.PORT || 4500}${app.graphqlPath || "/graphql"}`,
  );
});
