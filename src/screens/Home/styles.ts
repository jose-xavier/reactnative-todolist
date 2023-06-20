import styled from "styled-components/native"

export const HomeContainer = styled.View`
    background: #1A1A1A;
    height: 100%;
`

export const Form = styled.View`
    padding: 24px;
    margin-top: -54px;
    gap: 4px;
    flex-direction: row;
`
export const Input = styled.TextInput`
    flex: 1;
    height: 54px;
    padding: 14px;
    background-color:#333333;
    color: #808080;
    font-size: 16px;
    border-radius: 6x;

    &::placeholder {
        color: #808080;
    }
`

export const Button = styled.TouchableOpacity`
    height: 54px;
    padding: 18px;
    background: #1E6F9F;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`