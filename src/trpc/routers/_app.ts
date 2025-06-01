import { agentsRouter } from "@/modules/agents/server/procedures";
import { MeetingsRouter } from "@/modules/meetings/server/procedures";
import { createTRPCRouter } from "@/trpc/init";
export const appRouter = createTRPCRouter({
  agents: agentsRouter,
  meetings: MeetingsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
