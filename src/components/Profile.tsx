import React from "react";
import {Avatar, Cell, Div, Panel, PanelHeaderSimple} from "@vkontakte/vkui";

type Props = {
    id: string
};

class Profile extends React.Component<Props> {
    render() {
        const { id } = this.props;

        return (
            <Panel id={id}>
                <PanelHeaderSimple>Профиль</PanelHeaderSimple>
                <Div>
                    <Cell
                        before={<Avatar
                            src={'https://sun9-46.userapi.com/c855036/v855036714/21ba91/rqBpdGovKoU.jpg'}
                            size={48}
                        />}
                        description={'12 лет, пошлый'}
                    >
                        Никита Горшок
                    </Cell>
                </Div>
            </Panel>
        );
    }
}

export default Profile;