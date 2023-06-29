import { CheckCircle } from "phosphor-react-native";
import { BaseIcon, TaskContainer, TaskContent, TrashIcon } from "./styles";

export function Task() {
    return (
        <TaskContainer>
            <BaseIcon>
                <CheckCircle
                    color= "#5E60CE"
                    weight="fill"
                    size={25}
                />
            </BaseIcon>
            <TaskContent>Integer urna interdum massa libero auctor neque turpis turpis semper.</TaskContent>
            <TrashIcon 
                size={20} 
                color="#808080"
            />
        </TaskContainer>
    )
}