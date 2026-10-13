//import React from "react"
import { Flex,Input, Button } from "@chakra-ui/react"
import { LuPlus } from "react-icons/lu"
import {AddTaskProps} from "@types"
 

const AddTask = ({task,setTask,handleCreateTask}:
  AddTaskProps) => {
  return (
    <Flex pt="2rem" pl="2rem" pr="2rem" pb="1rem">
      <Input
        placeholder='Nouvelle tâche...'
        size='lg'
        onChange={(e)=> setTask(e.target.value)}
        value={task}
        style={{'background': '#fff'}}
       />
       <Button 
          colorPalette='blue'
          size='lg'
          onClick={() => handleCreateTask()}
        >
          <LuPlus />
       </Button>
    </Flex> 
         
      ) }


export default AddTask
