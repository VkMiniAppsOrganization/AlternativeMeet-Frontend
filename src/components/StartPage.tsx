import React from "react";
import {Panel, PanelHeaderSimple, Div, Checkbox, FormLayout, Link, Button} from "@vkontakte/vkui";

type Props = {
    id: string
};

type State = {
    isAgreed: boolean
}

class StartPage extends React.Component<Props, State> {
    state: State = {
        isAgreed: false
    };

    render() {
        const {id} = this.props;

        return (
            <Panel id={id}>
                <PanelHeaderSimple>Приветствие</PanelHeaderSimple>
                <Div>
                    Приветствуем вас здесь в сервисе знакомств Alternative Meet. Знаю что я плохо описываю сервисы
                    просто потом найму фантазера)
                </Div>
                <FormLayout>
                    <Checkbox onClick={() => {
                        this.setState({isAgreed: !this.state.isAgreed})
                        console.log("Сработал тригер checkbox")
                    }}>Я согласен с вашими <Link
                        onClick={(event) => {
                            event.preventDefault()
                            console.log("Перенаправить на правила")
                        }}>правилами
                        использования</Link> и <Link
                        onClick={(event) => {
                            event.preventDefault()
                            console.log("Перенаправить на лицензионное соглашение")
                        }}>лицензионным
                        соглашением</Link> данного сервиса</Checkbox>
                    <Button size="xl" disabled={!this.state.isAgreed}
                            onClick={() => console.log("Перенаправить на регистрацию")}>Продолжить</Button>
                </FormLayout>
            </Panel>
        );
    }
}

export default StartPage;