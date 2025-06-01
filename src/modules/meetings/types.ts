import { inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "@/trpc/routers/_app";


export type meetingsGetOne = inferRouterOutputs<AppRouter>["meetings"]["getOne"];