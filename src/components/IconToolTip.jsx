import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
export default function IconToolTip({ children, iconName }) {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{iconName}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
