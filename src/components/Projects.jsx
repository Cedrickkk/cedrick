import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Projects() {
  return (
    <section className="m-3 border-b border-b-slate-200 px-3 py-12">
      <h3 className="mb-2 text-2xl font-bold text-slate-800">Projects</h3>
      <div className="flex justify-between">
        <p className="text-slate-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti!
        </p>
        <Button variant="link" className="flex gap-1">
          @repositories
        </Button>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16 / 9} className="bg-blue-400"></AspectRatio>
          </CardContent>
          <CardFooter className="flex justify-end gap-3">
            <Button variant="link">Github</Button>
            <Button variant="secondary">Preview</Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16 / 9} className="bg-blue-400"></AspectRatio>
          </CardContent>
          <CardFooter className="flex justify-end gap-3">
            <Button variant="link">Github</Button>
            <Button variant="secondary">Preview</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
