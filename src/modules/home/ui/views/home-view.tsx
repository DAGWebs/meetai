"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function HomeView({}) {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  if (!session) {
    return <div className="flex flex-col p-4 gap-y-4">...Loading</div>;
  }
  return (
    <div className="flex flex-col p-4 gap-y-4">
      <p>Logined in as {session.user.name}</p>
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: { onSuccess: () => router.push("/sign-in") },
          })
        }
      >
        Sign out
      </Button>
    </div>
  );
}
