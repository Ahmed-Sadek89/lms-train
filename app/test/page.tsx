import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex items-center flex-col bg-gray-400 justify-center gap-10">
      <div className="flex items-start gap-3">
        <Button variant="primary/primary" size="sm">
          Sign in
        </Button>
        <Button variant="primary/primary" size="md">
          create account
        </Button>
        <Button variant="primary/primary" size="lg">
          Large
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="primary/primary" size={"icon-left"}>
          <ChevronLeft size={24} />
          left icon
        </Button>
        <Button variant="primary/primary" size="icon-right">
          right icon
          <ChevronRight size={24} />
        </Button>
        <Button variant="primary/primary" size="icon">
          Hello
        </Button>
      </div>
    </div>
  );
}
