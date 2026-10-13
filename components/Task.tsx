import { Card, Flex, Text, Button } from "@chakra-ui/react"
import { LuCheck, LuTrash2 } from "react-icons/lu"
import { TaskProps } from "@types"

const Task = ({individualTask, handleCompleteTask,
handleDeleteTask} : TaskProps) => {
  return (
 <Card.Root p="2rem" mb="0.5rem" variant= "outline">
    <Flex alignItems="center">
        {individualTask.completed ? (
            <Text flexGrow="1"   
            textDecoration="line-through" >
                {individualTask.task}
            </Text>
        ) : (
            <Text flexGrow="1">
                {individualTask.task}
            </Text>
        )}
        <Flex>
           {individualTask.completed ? (
            <Button
                ml="1rem"
                colorPalette='green'
                disabled
            >
                < LuCheck />
            </Button>
           ) : ( <Button 
                    ml="1rem"
                    colorPalette='green'
                    onClick={() => handleCompleteTask
                    (individualTask._id)
                    }
                >
                 < LuCheck />
                </Button>
                )}
                <Button
                    ml="1rem"
                    colorPalette="red"
                    onClick={() => handleDeleteTask(individualTask._id)}
                >
                    <LuTrash2/> 
                </Button>
            </Flex>
        </Flex> 
    </Card.Root>
  )
}

export default Task
