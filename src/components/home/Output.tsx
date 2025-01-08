import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";

function Output() {
  return (
    <div className="flex min-h-[50vh] mt-2 flex-col rounded-xl bg-muted/50 backdrop-blur-sm overflow-hidden border border-primary/5">
      <BorderBeam size={1200} borderWidth={1.5} duration={4} className="z-10" />
      <Badge variant="outline" className="absolute top-3 right-3 z-50">
        Output
      </Badge>
    </div>
  );
}

export default Output;
