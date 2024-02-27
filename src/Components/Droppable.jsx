import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'lightblue' : 'green',
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
      Salchicha
    </div>
  );
}