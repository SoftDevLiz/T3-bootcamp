import { publicProcedure, createTRPCRouter } from "../trpc";


export const mockRouter = createTRPCRouter({
    getMockCV: publicProcedure.query(() => {
        return {
            name: "Liz Mouton",
            title: "Badass junior software engineer",
            experience: "Enough to be a great junior!",
            skills: "...prevSkills => prevSkills + T3 stack."
        }
    })
});