import { ApolloServer, gql } from "apollo-server";

// - type Query is the mandatory part
// - Scalar & Non-scalar types

const typeDefs = gql`
    type User {
        id: ID
        username: String
    }
    type Tweet {
        id: ID
        text: String
        author: User
    }
    type Query {
        allTweets: [Tweet]
        allUsers: [User]
    }
`;

const server = new ApolloServer({typeDefs});

server.listen().then(({url}) => {
    console.log(`Running on ${url}`);
});