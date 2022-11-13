import { ApolloServer, gql } from "apollo-server";

// type Query is the mandatory part
// below is same as /text and /hello in REST API
const typeDefs = gql`
    type Query {
        text: String
        hello: String
    }
`;

const server = new ApolloServer({typeDefs});

server.listen().then(({url}) => {
    console.log(`Running on ${url}`);
});