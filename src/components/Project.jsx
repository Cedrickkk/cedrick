import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export default function Project() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9} className="bg-blue-400"></AspectRatio>
      </CardContent>
      <CardFooter className="flex justify-end gap-3">
        <Button variant="link">Github</Button>
        <Button variant="secondary">Preview</Button>
      </CardFooter>
    </Card>
  );
}
