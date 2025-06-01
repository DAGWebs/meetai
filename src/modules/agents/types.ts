import { inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "@/trpc/routers/_app";

export type agentGetMany =
  inferRouterOutputs<AppRouter>["agents"]["getMany"]["items"];
export type agentGetOne = inferRouterOutputs<AppRouter>["agents"]["getOne"];
