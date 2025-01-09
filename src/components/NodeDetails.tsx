import { Node } from "@xyflow/react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { X } from "lucide-react";
import { Button } from "./ui/button";

export interface NodeData {
  label: string;
  type: string;
  businessTerm: string;
  [key: string]: unknown; // Add index signature to satisfy Record<string, unknown>
}

interface NodeDetailsProps {
  node: Node<NodeData> | null;
  onClose: () => void;
}

export function NodeDetails({ node, onClose }: NodeDetailsProps) {
  if (!node) return null;

  return (
    <div className="fixed right-0 top-0 h-full">
      <Sidebar className="w-[300px] border-l border-gray-800">
        <SidebarHeader className="border-b border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Node Details</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-400">Label</h3>
              <p className="mt-1">{node.data.label}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400">Type</h3>
              <p className="mt-1">{node.data.type}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400">Business Term</h3>
              <p className="mt-1">{node.data.businessTerm}</p>
            </div>
          </div>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}