import { CheckCircle } from "phosphor-react-native";
import { BaseIcon, TaskContainer, TaskContent, TrashIcon } from "./styles";
import { TouchableOpacity } from "react-native"

interface TaskProps {
    content: string;
    onRemoveTask: () => void;
}


export function Task({ content, onRemoveTask }: TaskProps) {
    return (
        <TaskContainer>
            <BaseIcon>
                <CheckCircle
                    color= "#5E60CE"
                    weight="fill"
                    size={25}
                />
            </BaseIcon>
            <TaskContent>{content}</TaskContent>
            <TouchableOpacity onPress={onRemoveTask}>
                <TrashIcon 
                    size={20} 
                    color="#808080"
                />
            </TouchableOpacity>
        </TaskContainer>
    )
}