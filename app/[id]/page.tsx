import { Button } from "@/components/ui/button";
import Link from "next/link";

type paramsType = { params: { id: string } };

export default function Page({ params }: paramsType) {
  return (
    <main>
      <h1>{params.id}</h1>
      <Button asChild>
        <Link href="/">Go Back</Link>
      </Button>
    </main>
  );
}
