import { CheckCircle, Trash } from "phosphor-react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

interface IconProps {
    situation: "done" | "a"
}


export const TaskContainer = styled.View`
    flex-direction: row;
    height: 64px;
    background: #333333;
    padding: 12px;
    border-radius: 8px;
    gap: 8px;
    overflow: hidden;
    align-items: center;
    margin-top: 8px;
    
`

export const TaskContent = styled.Text<IconProps>`
    flex: 1;
    font-size: 14px;
    flex-shrink: 1;
    text-align: justify;
    color: #F2F2F2;
    
    ${props => props.situation === "done" && css`
        text-decoration: line-through;
        color: #808080;
    ` 
    }
`

export const TrashIcon = styled(Trash)`
    color: #4EA8DE;
`
export const CheckCircleContainer = styled.View.attrs({
    backgroundColor: "#FFF"
})`
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 20px;
    width: 20px;
`

export const IconContainer = styled.View<IconProps>`
    ${props => props.situation === 'done' ? css`
        background: #fff;
        border-radius: 50px;
        justify-content: center;
        align-items: center;
        height: 20px;
        width: 20px;
    ` : css`
        justify-content: center;
        align-items: center;
        height: 20px;
        width: 20px;
    `}
`
