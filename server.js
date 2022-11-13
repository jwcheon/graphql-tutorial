import { ApolloServer, gql } from "apollo-server";

// - type Query is the mandatory part
// - Scalar & Non-scalar types
// - Mutation type: causes mutation in data (= like POST DELETE PUT PATCH in REST API)
// - Non Nullable Fields: mandatory values. w/o ! it's nullable(ex. Tweet|null)
//   - So 'tweet' in Query might not have a matching ID in DB to return so it's nullable

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        firstName: String
        lastName: String
    }
    type Tweet {
        id: ID!
        text: String!
        author: User!
    }
    type Query {
        allTweets: [Tweet!]!
        tweet(id: ID!): Tweet
    }
    type Mutation {
        postTweet(text: String!, userId: ID!): Tweet!
        deleteTweet(id: ID!): Boolean!
    }
`;

const server = new ApolloServer({typeDefs});

server.listen().then(({url}) => {
    console.log(`Running on ${url}`);
});