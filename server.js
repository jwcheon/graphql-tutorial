import { ApolloServer, gql } from "apollo-server";

// - type Query is the mandatory part
// - Scalar & Non-scalar types
// - Mutation type: causes mutation in data (= like POST DELETE PUT PATCH in REST API)

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
        tweet(id: ID): Tweet
        allUsers: [User]
        user(id: ID): User
    }
    type Mutation {
        postTweet(text: String, userId: ID): Tweet
        deleteTweet(id: ID): Boolean
    }
`;

const server = new ApolloServer({typeDefs});

server.listen().then(({url}) => {
    console.log(`Running on ${url}`);
});