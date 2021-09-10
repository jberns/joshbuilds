import React, { useState } from 'react';
import ReactFlow, {
  addEdge,
  ArrowHeadType,
  Background,
  Connection,
  Edge,
  Elements,
  Node,
  OnLoadParams,
  Position,
  removeElements,
} from 'react-flow-renderer';

const initialElements: (Node | Edge)[] = [
  {
    id: '1',
    type: 'input',
    data: {
      label: <>Analyze</>,
    },
    position: { x: 0, y: 0 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    style: { color: 'red' },
  },
  {
    id: '2',
    type: '',
    data: {
      label: <>Build</>,
    },
    position: { x: 125, y: 125 },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom,
  },
  {
    id: '3',
    type: '',
    data: {
      label: <>Test</>,
    },
    position: { x: 0, y: 250 },
    targetPosition: Position.Right,
    sourcePosition: Position.Left,
  },
  {
    id: '4',
    type: '',
    data: {
      label: <>Repeat</>,
    },
    position: { x: -125, y: 125 },
    targetPosition: Position.Bottom,
    sourcePosition: Position.Top,
  },
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
  {
    id: 'e4-1',
    source: '4',
    target: '1',
    animated: true,
    arrowHeadType: ArrowHeadType.ArrowClosed,
  },
];

const onLoad = (reactFlowInstance: OnLoadParams) => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};

export const Flow = () => {
  const [elements, setElements] = useState(initialElements);

  const onElementsRemove = (elementsToRemove: Elements) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onConnect = (params: Edge | Connection) =>
    setElements((els) => addEdge(params, els));

  return (
    <div className="w-full h-96">
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onLoad={onLoad}
        snapToGrid={true}
        snapGrid={[15, 15]}
        zoomOnScroll={false}
        zoomOnDoubleClick={false}
      >
        <Background color="orange" gap={16} size={1} />
      </ReactFlow>
    </div>
  );
};
