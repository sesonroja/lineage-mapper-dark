import { Node } from "@xyflow/react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { X } from "lucide-react";
import { Button } from "./ui/button";

export interface NodeData {
  label: string;
  type: string;
  businessTerm: string;
  [key: string]: unknown;
}

interface NodeDetailsProps {
  node: Node<NodeData> | null;
  onClose: () => void;
}

export function NodeDetails({ node, onClose }: NodeDetailsProps) {
  if (!node) return null;

  return (
    <Sidebar className="w-[300px] border-l border-gray-800">
      <SidebarHeader className="border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Node Details</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <div className="space-y-6">
          <div className="w-full">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Label</h3>
            <p className="text-white break-words">{node.data.label}</p>
          </div>
          <div className="w-full">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Type</h3>
            <p className="text-white break-words">{node.data.type}</p>
          </div>
          <div className="w-full">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Business Term</h3>
            <p className="text-white break-words">{node.data.businessTerm}</p>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}