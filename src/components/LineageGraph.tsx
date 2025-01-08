import { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: 'N_00001',
    type: 'default',
    data: { 
      label: 'Afluente Colbún (d)',
      type: 'Base',
      businessTerm: '48'
    },
    position: { x: 400, y: 0 },
    className: 'dark:bg-node-base dark:text-node-text border-2 border-node-highlight rounded-lg p-4'
  },
  {
    id: 'N_00002',
    type: 'default',
    data: { 
      label: 'Calculo Afluente Colbún (d)',
      type: 'Transformación',
      businessTerm: '48'
    },
    position: { x: 400, y: 100 },
    className: 'dark:bg-node-base dark:text-node-text border-2 border-node-highlight rounded-lg p-4'
  },
  // Add nodes N_00003 through N_00010 with appropriate positions
  {
    id: 'N_00003',
    type: 'default',
    data: { 
      label: 'Caudal Regulado Colbun (d)',
      type: 'Base',
      businessTerm: 'Sin Asignar'
    },
    position: { x: 0, y: 200 },
    className: 'dark:bg-node-base dark:text-node-text border-2 border-node-highlight rounded-lg p-4'
  },
  // ... Add remaining nodes with similar structure
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: 'N_00002',
    target: 'N_00001',
    animated: true,
    style: { stroke: '#9E86ED' }
  },
  {
    id: 'e3-2',
    source: 'N_00003',
    target: 'N_00002',
    animated: true,
    style: { stroke: '#9E86ED' }
  },
  // ... Add remaining edges
];

export function LineageGraph() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div className="w-full h-[800px] bg-background">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-right"
        className="dark"
      >
        <Background className="dark:bg-gray-900" />
        <Controls className="dark:bg-gray-800 dark:text-white" />
        <MiniMap 
          className="dark:bg-gray-800"
          nodeColor="#9E86ED"
          maskColor="rgba(0, 0, 0, 0.2)"
        />
      </ReactFlow>
    </div>
  );
}