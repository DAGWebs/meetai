import {SearchIcon} from "lucide-react";
import {Input} from "@/components/ui/input";
import {useAgentFilters} from "@/modules/agents/hooks/use-agents-filters";

export const AgentsSearchFIlter = () => {
    const [filters, setFilters] = useAgentFilters()

    return(
        <div className="relative">
            <Input
                placeholder="Filter by name"
                value={filters.search}
                onChange={(e) => setFilters({ search: e.target.value })}
                className="h-9 bg-white dark:bg-gray-900 w-[200px] pl-7"
            />
            <SearchIcon className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
        </div>
    )
}