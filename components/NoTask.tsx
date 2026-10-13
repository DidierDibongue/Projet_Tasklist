
import { Flex, Alert} from "@chakra-ui/react"

const NoTask = () => {
  return (
    <Flex >
        <Alert.Root status="warning">
            <Alert.Indicator/>
            Pas de tâche pour le moment.
        </Alert.Root>
    </Flex>

  )
}

export default NoTask
