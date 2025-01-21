 import { createRouter } from '../trpc'
 import { contactFormRouter } from './contactForm'

 export const appRouter = createRouter()
    .merge('contactForm', contactFormRouter);