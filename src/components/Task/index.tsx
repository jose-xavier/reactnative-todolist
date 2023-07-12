import { CheckCircle, Circle } from "phosphor-react-native";
import { IconContainer , TaskContainer, TaskContent, TrashIcon } from "./styles";
import { TouchableOpacity } from "react-native"

interface TaskProps {
    id: string;
    content: string;
    isDone: boolean;
    onRemoveTask: (id: string) => void;
    onToggleTask: (id: string) => void;
}


export function Task({ content, onRemoveTask, onToggleTask, isDone, id }: TaskProps) {
    
    function handleToggleTask() {
        onToggleTask(id)
    }

    function handleDeleteTask() {
        onRemoveTask(id)
    }

    return (
        <TaskContainer>
            
                <TouchableOpacity onPress={handleToggleTask}>
                
                    {
                        isDone === true ? 
                            <IconContainer situation="done">
                                <CheckCircle 
                                    color= "#5E60CE"
                                    weight="fill"
                                    size={25}
                                />
                            </IconContainer>
                           
                        
                         : 
                            <IconContainer situation="uncompleted">
                                <Circle 
                                    size={25} 
                                    color= "#5E60CE"
                                />
                            </IconContainer>
                       
                    }
                    </TouchableOpacity>
            
                    {
                        isDone === true ?
                            <TaskContent situation="done">{content}</TaskContent>
                        :
                            <TaskContent situation="uncompleted">{content}</TaskContent>
                    }
                
            
            <TouchableOpacity onPress={handleDeleteTask}>
                <TrashIcon 
                    size={20} 
                    color="#808080"
                />
            </TouchableOpacity>
        </TaskContainer>
    )
}