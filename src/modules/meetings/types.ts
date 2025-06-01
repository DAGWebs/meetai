import { inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "@/trpc/routers/_app";

export type meetingsGetMany =
  inferRouterOutputs<AppRouter>["meetings"]["getMany"]["items"];
export type meetingsGetOne =
  inferRouterOutputs<AppRouter>["meetings"]["getOne"];
