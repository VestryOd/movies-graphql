import fs from "fs";
import { createServer } from 'node:http';
import { createSchema, createYoga } from 'graphql-yoga';
import { resolvers } from "./graphql/resolvers";
import * as path from 'path';

const yoga = new createYoga({
  schema: createSchema({
    typeDefs: fs.readFileSync(path.join(__dirname, 'graphql/schema.graphql'), 'utf-8'),
    resolvers,
  })
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})

