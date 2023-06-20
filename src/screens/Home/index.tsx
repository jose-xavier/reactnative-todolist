import { Header } from "../../components/Header";
import { PlusCircle } from "phosphor-react-native";
import { Button, Form, HomeContainer, Input } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Header />

            <Form>
                <Input
                placeholder="Adicione uma nova tarefa"
                />

                <Button>
                    <PlusCircle color="#808080"/>
                </Button>
            </Form>

        </HomeContainer>
    )
}