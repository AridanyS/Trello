import React from "react";
import { DndContext } from "@dnd-kit/core";

import { Draggable } from './Components/Draggable';
import { Droppable } from './Components/Droppable';


export default function App(){
  return(
    <DndContext>
      <Draggable />
      <Droppable />
    </DndContext>
  )
}
//      