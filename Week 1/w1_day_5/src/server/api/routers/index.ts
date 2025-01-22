 import { createTRPCRouter } from '../trpc';
 import { contactFormRouter } from './contactForm'

 export const appRouter = createTRPCRouter()
    .merge('contactForm', contactFormRouter);

/* TODO: 
    What's happening here and why??
*/