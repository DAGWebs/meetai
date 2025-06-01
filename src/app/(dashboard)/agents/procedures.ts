import { db } from "@/db";
import { agents } from "@/db/schema";
import {
  createTRPCRouter,
  baseProcedure,
  protectedProcedure,
} from "@/trpc/init";
import { agentsInsertSchema } from "@/modules/agents/schemas";
// import { TRPCError } from "@trpc/server";

export const agentsRouter = createTRPCRouter({
  //TODO: change getMany to use protectedProcedure
  getMany: baseProcedure.query(async () => {
    const data = await db.select().from(agents);

    // throw new TRPCError({ code: "BAD_REQUEST" });
    return data;
  }),
  create: protectedProcedure
    .input(agentsInsertSchema)
    .mutation(async ({ input, ctx }) => {
      const [createdAgent] = await db
        .insert(agents)
        .values({
          ...input,
          userId: ctx.auth.user.id,
        })
        .returning();
      return createdAgent;
    }),
});
