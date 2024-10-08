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

export default function Project({ title, description, image }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <img src={image} className="h-full w-full" />
        </AspectRatio>
      </CardContent>
      <CardFooter className="flex justify-end gap-3">
        <Button variant="ghost">Code</Button>
        <Button variant="ghost">Demo</Button>
      </CardFooter>
    </Card>
  );
}
