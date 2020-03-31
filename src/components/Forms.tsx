import React from "react";
import {Cell, Div, List, Panel, PanelHeaderSimple} from "@vkontakte/vkui";

type Props = {
    id: string
};

class Forms extends React.Component<Props> {
    render() {
        const { id } = this.props;

        return (
            <Panel id={id}>
                <PanelHeaderSimple>Анкеты</PanelHeaderSimple>
                <Div>
                    <List>
                        <Cell>Undefined Undefined</Cell>
                    </List>
                </Div>
            </Panel>
        );
    }
}

export default Forms;