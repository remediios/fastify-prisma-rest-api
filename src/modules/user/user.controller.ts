import { FastifyReply, FastifyRequest } from 'fastify';
import { createUser, findUserByEmail, findUsers } from './user.service';
import { CreateUserInput, LoginRequest } from './user.schema';
import { verifyPassword } from '../../utils/hash';
import { fastify } from '../../app';

export async function registerUserHandler(
  request: FastifyRequest<{
    Body: CreateUserInput;
  }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const user = await createUser(body);

    return reply.code(201).send(user);
  } catch (error) {
    console.log(error);
    reply.code(500).send(error);
  }
}

export async function loginHandler(
  request: FastifyRequest<{
    Body: LoginRequest;
  }>,
  reply: FastifyReply
) {
  const body = request.body;

  //find user by email
  const user = await findUserByEmail(body.email);
  if (!user) {
    return reply.code(401).send({ message: 'Invalid credentials' });
  }

  //verify password
  const isPasswordCorrect = verifyPassword({
    candidatePassword: body.password,
    salt: user.salt,
    hash: user.password,
  });

  //generate access token
  if (isPasswordCorrect) {
    const { password, salt, ...rest } = user;
    return { accessToken: fastify.jwt.sign(rest) };
  }

  //respond
  return reply.code(401).send({ message: 'Invalid credentials' });
}

export async function getUsersHandler() {
  const users = await findUsers();
  return users;
}
