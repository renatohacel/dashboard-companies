import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { CustomTooltipProps } from "./Custom.types"
import { Info } from "lucide-react"



export const CustomTooltip = (props: CustomTooltipProps) => {
    const { content } = props
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Info strokeWidth={1} className="h-5 w-5" />
                </TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
