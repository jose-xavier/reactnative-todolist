import { CheckCircle, Trash } from "phosphor-react-native";
import styled from "styled-components/native";


export const TaskContainer = styled.View`
    flex-direction: row;
    height: 64px;
    background: #333333;
    padding: 12px;
    border-radius: 8px;
    gap: 8px;
    overflow: hidden;
    align-items: center;
    
`

export const TaskContent = styled.Text`
    color: #F2F2F2;
    font-size: 14px;
    flex-shrink: 1;
    text-align: justify;    
`

export const TrashIcon = styled(Trash)`
    color: #4EA8DE;
`
export const BaseIcon = styled.View.attrs({
    backgroundColor: "#FFF"
})`
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 20px;
    width: 20px;
`
