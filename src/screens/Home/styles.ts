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

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#808080"
  })`
    flex: 1;
    height: 54px;
    padding: 14px;
    background:#333333;
    color: #F2F2F2;
    font-size: 16px;
    border-radius: 6px;
  `;

export const Button = styled.TouchableOpacity`
    height: 54px;
    padding: 18px;
    background: #1E6F9F;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`

export const Summary = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
    padding: 0px 24px;
    margin-bottom: 20px;
`

export const TaskCount = styled.View`
    background: #333333;
    
    border-radius: 50px;
    padding: 4px 8px;
`

export const InfoCount= styled.Text`
    color: #D9D9D9;
    font-size: 14px;
`

export const InfoTaskContainer = styled.View`
    flex-direction: row;
    gap: 8px;
    align-items: center;
`

export const TasksCreated = styled.Text`
    color: #4EA8DE;
    font-weight: bold;
    font-size: 16px;
`

export const TasksDone = styled.Text`
    color: #8284FA;
    font-weight: bold;
    font-size: 16px;
`
export const ListContainer = styled.View`
    padding: 0 24px;
    gap: 8px;
`