import React from "react";
import {Panel, PanelHeaderSimple, Div, FormLayout, Input, Button} from "@vkontakte/vkui";
import vkbridge from '@vkontakte/vk-bridge'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
    id: string
};

type Form = {
    vk_id: number,
    bio: string,
    firstname: string,
    lastname: string,
    photo_src: string,
    birthday: string,
    sex: 0 | 1 | 2 | 3 | 4,
    geo_lat: string,
    geo_long: string,
    agefrom: number,
    ageto: number
}

type State = {
    form: Form
}

class RegisterPage extends React.Component<Props, State> {

    updateGeo = () => {
        vkbridge.send("VKWebAppGetGeodata").then(result => {
            this.setState({form: {geo_lat: result.lat, geo_long: result.long, ...this.state?.form}})
        })
    }

    render() {
        const {id} = this.props;

        return (
            <Panel id={id}>
                <PanelHeaderSimple>Регистрация анкеты</PanelHeaderSimple>
                <Div>
                    Теперь нам потребуется зарегистрировать ваш аккаунт, давайте приступим не будем медлить!
                </Div>
                <FormLayout>
                    <Input top={"Ваш идентификатор профиля"} disabled={true} value={this.state?.form?.vk_id}/>
                    <Input top={"Ваше имя"} disabled={true} value={this.state?.form?.firstname}/>
                    <Input top={"Ваша фамилия"} disabled={true} value={this.state?.form?.lastname}/>

                    <Input top={"Местоположение (Широта долгота)"}
                           value={`${this.state?.form?.geo_lat} ${this.state?.form?.geo_long}`}/>
                    <Button onClick={this.updateGeo} size={'xl'}>Разрешить геометку</Button>

                </FormLayout>
            </Panel>
        );
    }

    componentDidMount(): void {
        vkbridge.send("VKWebAppGetUserInfo").then(user => {
            let form: Form = {
                vk_id: user.id,
                firstname: user.first_name,
                lastname: user.last_name,
                birthday: user.bdate, ...this.state?.form
            }
            this.setState({form})
        })
    }
}

export default RegisterPage;