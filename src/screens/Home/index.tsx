import { Header } from "../../components/Header";
import { PlusCircle } from "phosphor-react-native";
import { Button,Form, HomeContainer, InfoCount, InfoTaskContainer, Input, ListContainer, Summary, TaskCount, TasksCreated, TasksDone } from "./styles";
import { Task } from "../../components/Task";

export function Home() {
    return (
        <HomeContainer>
            <Header />

            <Form>
                <Input
                placeholder="Adicione uma nova tarefa"
                />

                <Button>
                    <PlusCircle color="#F2F2F2"/>
                </Button>
            </Form>

            <Summary>
                <InfoTaskContainer>
                    <TasksCreated>Criadas</TasksCreated>
                    <TaskCount>
                        <InfoCount>8</InfoCount>
                    </TaskCount>
                </InfoTaskContainer>

                <InfoTaskContainer>
                    <TasksDone>Concluídas</TasksDone>
                    <TaskCount>
                        <InfoCount>8</InfoCount>
                    </TaskCount>
                </InfoTaskContainer>
            </Summary>
            <ListContainer>
                <Task />
                <Task />
            </ListContainer>
        </HomeContainer>
    )
}