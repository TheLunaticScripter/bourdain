import { GraphQLServer } from 'graphql-yoga'
import Query from './resolvers/Query'
import prisma from './prisma'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
      Query
    },
    context: {
        prisma
    }
})

server.start(() => {
    console.log('The server is up!')
})