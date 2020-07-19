import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';
import request from 'supertest';
import jwt from 'jsonwebtoken';

declare global {
  namespace NodeJS {
    interface Global {
      signin(id?: string): string[];
    }
  }
}

jest.mock('../nats-wrapper.ts');
process.env.STRIPE_KEY =
  'sk_test_51H72TcEUKGOwqkwA636G8s24w6uc0EUHxKyH1Gv96KIjLY5hoBiev6yJ1Fw0pKBi3jSUp9Nb2CDO1MsVzDCEL72u007IXC7anB';

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = 'asdf';
  //process.env.NODE_ENV = 'test';

  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = (id?: string) => {
  // build a JWT payload. {id, email}
  const payload = {
    id: id || new mongoose.Types.ObjectId().toHexString(),
    emial: 'test@test.com',
  };
  // Create the JWT
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // Build session Object {jwt: My_JWT}
  const session = { jwt: token };

  //Turn that session into JSON
  const sessionJSON = JSON.stringify(session);
  // take JSON and encode it as base64
  const base64 = Buffer.from(sessionJSON).toString('base64');
  // return a string thats the cookie with the encoded data
  return [`express:sess=${base64}`];
};
