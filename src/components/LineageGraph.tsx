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
import { DownloadButtons } from './DownloadButtons';

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
    className: 'dark:bg-node-transformation dark:text-node-text border-2 border-node-highlight rounded-lg p-4'
  },
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
  {
    id: 'N_00004',
    type: 'default',
    data: { 
      label: 'Gasto Colbún (d)',
      type: 'Base',
      businessTerm: 'Sin Asignar'
    },
    position: { x: 200, y: 200 },
    className: 'dark:bg-node-base dark:text-node-text border-2 border-node-highlight rounded-lg p-4'
  },
  {
    id: 'N_00005',
    type: 'default',
    data: { 
      label: 'Filtraciones (d)',
      type: 'Base',
      businessTerm: 'Sin Asignar'
    },
    position: { x: 400, y: 200 },
    className: 'dark:bg-node-base dark:text-node-text border-2 border-node-highlight rounded-lg p-4'
  },
  {
    id: 'N_00006',
    type: 'default',
    data: { 
      label: 'Desague de Fondo (d)',
      type: 'Base',
      businessTerm: 'Sin Asignar'
    },
    position: { x: 600, y: 200 },
    className: 'dark:bg-node-base dark:text-node-text border-2 border-node-highlight rounded-lg p-4'
  },
  {
    id: 'N_00007',
    type: 'default',
    data: { 
      label: 'Caudal (h) Colbun Compuerta El Colorado',
      type: 'Base',
      businessTerm: 'Sin Asignar'
    },
    position: { x: 800, y: 200 },
    className: 'dark:bg-node-base dark:text-node-text border-2 border-node-highlight rounded-lg p-4'
  },
  {
    id: 'N_00008',
    type: 'default',
    data: { 
      label: 'Riego (d) Canal Maule Sur',
      type: 'Base',
      businessTerm: 'Sin Asignar'
    },
    position: { x: 200, y: 300 },
    className: 'dark:bg-node-base dark:text-node-text border-2 border-node-highlight rounded-lg p-4'
  },
  {
    id: 'N_00009',
    type: 'default',
    data: { 
      label: 'Vertimiento (d) Colbun',
      type: 'Base',
      businessTerm: 'Sin Asignar'
    },
    position: { x: 400, y: 300 },
    className: 'dark:bg-node-base dark:text-node-text border-2 border-node-highlight rounded-lg p-4'
  },
  {
    id: 'N_00010',
    type: 'default',
    data: { 
      label: 'Cota (d) Colbún',
      type: 'Base',
      businessTerm: '50'
    },
    position: { x: 600, y: 300 },
    className: 'dark:bg-node-base dark:text-node-text border-2 border-node-highlight rounded-lg p-4'
  }
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
  {
    id: 'e4-2',
    source: 'N_00004',
    target: 'N_00002',
    animated: true,
    style: { stroke: '#9E86ED' }
  },
  {
    id: 'e5-2',
    source: 'N_00005',
    target: 'N_00002',
    animated: true,
    style: { stroke: '#9E86ED' }
  },
  {
    id: 'e6-2',
    source: 'N_00006',
    target: 'N_00002',
    animated: true,
    style: { stroke: '#9E86ED' }
  },
  {
    id: 'e7-2',
    source: 'N_00007',
    target: 'N_00002',
    animated: true,
    style: { stroke: '#9E86ED' }
  },
  {
    id: 'e8-2',
    source: 'N_00008',
    target: 'N_00002',
    animated: true,
    style: { stroke: '#9E86ED' }
  },
  {
    id: 'e9-2',
    source: 'N_00009',
    target: 'N_00002',
    animated: true,
    style: { stroke: '#9E86ED' }
  },
  {
    id: 'e10-2',
    source: 'N_00010',
    target: 'N_00002',
    animated: true,
    style: { stroke: '#9E86ED' }
  }
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
        <DownloadButtons />
      </ReactFlow>
    </div>
  );
}