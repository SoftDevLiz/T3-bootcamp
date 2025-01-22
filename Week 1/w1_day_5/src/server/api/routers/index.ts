import { createTRPCRouter } from '../trpc';
import { contactFormRouter } from './contactForm';
import { mergeRouters } from '@trpc/server/unstable-core-do-not-import';

export const appRouter = mergeRouters(
  createTRPCRouter({}),
  contactFormRouter
);
