import { Header } from "../../components/Header";
import { Text } from "react-native"
import { PlusCircle } from "phosphor-react-native";
import { Button,Form, HomeContainer, InfoCount, InfoTaskContainer, Input, ListContainer, Summary, TaskCount, TasksCreated, TasksDone } from "./styles";
import { Task } from "../../components/Task";
import { useState } from "react";
import { FlatList } from "react-native";


interface Task {
    id: string;
    content: string;
    isDone: boolean;
}

export function Home() {
    const [ tasks, setTasks ] = useState<Task[]>([])
    const [ taskText, setTaskText ] = useState('')

    function handleInsertTask() {
        const newtask = {
            id: new Date().getTime().toString(),
            content: taskText,
            isDone: false,
        }

        setTasks( tasks => [...tasks, newtask])
        setTaskText('')
    }

    function handleDeleteTask(id: string) {
       setTasks( tasks => tasks.filter( task => task.id !== id ))
    }

    function toggleTask(id: string) {
        const tasksWithChangedSituation = tasks.map( task => task.id === id ? {...task, isDone: !task.isDone}: task)

        setTasks(tasksWithChangedSituation)
    }

    const tasksDoned = tasks.filter(task => task.isDone === true)

    console.log(tasks)
    return (
        <HomeContainer>
            <Header />

            <Form>
                <Input
                    placeholder="Adicione uma nova tarefa"
                    onChangeText={ e => setTaskText(e)}
                    value={taskText}
                />

                <Button onPress={handleInsertTask}>
                    <PlusCircle color="#F2F2F2"/>
                </Button>
            </Form>

            <Summary>
                <InfoTaskContainer>
                    <TasksCreated>Criadas</TasksCreated>
                    <TaskCount>
                        <InfoCount>{tasks.length}</InfoCount>
                    </TaskCount>
                </InfoTaskContainer>

                <InfoTaskContainer>
                    <TasksDone>Concluídas</TasksDone>
                    <TaskCount>
                        <InfoCount>{tasks.filter( task => task.isDone === true).length}</InfoCount>
                    </TaskCount>
                </InfoTaskContainer>
            </Summary>
            <ListContainer>
                <FlatList 
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Task 
                            id={item.id}
                            content={item.content}
                            isDone={item.isDone}
                            onRemoveTask={() => handleDeleteTask(item.id)}
                            onToggleTask={toggleTask}
                        />
                    )}

                    ListEmptyComponent={() => (
                        <Text> Você ainda não possui informações cadastradas </Text>
                    )}
                />
  
            </ListContainer>
        </HomeContainer>
    )
}