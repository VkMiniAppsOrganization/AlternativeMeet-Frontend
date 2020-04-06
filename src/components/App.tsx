import React from "react";
import {Epic, Tabbar, TabbarItem, View} from "@vkontakte/vkui";
import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/user_circle_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';
import Profile from "./Profile";
import Forms from "./Forms";
import StartPage from './StartPage'
import RegisterPage from "./RegisterPage";

type State = {
    activeStory: string
};

class App extends React.Component<{}, State> {
    state: State = {
        activeStory: 'registerpage'
    };

    changeStory = (story: string) => {
        this.setState({activeStory: story});
    };

    render() {
        const {activeStory} = this.state;
        const tabbarHideCase = !["startpage", 'registerpage'].includes(activeStory)

        const tabbar = (tabbarHideCase) && (
            <Tabbar>
                <TabbarItem
                    onClick={() => this.changeStory('forms')}
                    selected={activeStory === 'forms'}
                    text={'Анкеты'}
                >
                    <Icon28Users3Outline/>
                </TabbarItem>
                <TabbarItem
                    onClick={() => this.changeStory('profile')}
                    selected={activeStory === 'profile'}
                    text={'Профиль'}
                >
                    <Icon28UserCircleOutline/>
                </TabbarItem>
            </Tabbar>
        );

        return (
            <Epic activeStory={activeStory} tabbar={tabbar}>
                <View activePanel={'registerpage'} id={'registerpage'}>
                    <RegisterPage id={'registerpage'}/>
                </View>
                <View activePanel={'startpage'} id={'startpage'}>
                    <StartPage id={'startpage'}/>
                </View>
                <View activePanel={'forms'} id={'forms'}>
                    <Forms id={'forms'}/>
                </View>
                <View activePanel={'profile'} id={'profile'}>
                    <Profile id={'profile'}/>
                </View>
            </Epic>
        );
    }
}

export default App;