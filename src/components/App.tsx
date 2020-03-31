import React from "react";
import {Epic, Tabbar, TabbarItem, View} from "@vkontakte/vkui";
import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/user_circle_outline';
import Icon28Users3Outline from '@vkontakte/icons/dist/28/users_3_outline';
import Profile from "./Profile";
import Forms from "./Forms";

type State = {
    activeStory: string
};

class App extends React.Component<{}, State> {
    state: State = {
        activeStory: 'forms'
    };

    changeStory = (story: string) => {
        this.setState({ activeStory: story });
    };

    render() {
        const { activeStory } = this.state;

        const tabbar = (
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