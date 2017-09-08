import React from 'react';

import {
  Platform,
  Button,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import ApiList from './ApiList';
import ApiDetail from './ApiDetail';

class Index extends React.Component {
  static navigationOptions = {
    title: 'SDK LABS',
    headerTitleStyle: {fontSize: 30, alignSelf: 'center'}
  };
  render() {
    return (
      <View>
        <Button 
          key='ApiList' 
          title='API list' 
          onPress={() => this.props.navigation.navigate('ApiList')}
        />
      </View>    
    )
  }
}

const AppNavigator = StackNavigator(
  {
    Index: { screen: Index },
    ApiList: { screen: ApiList },
    ApiDetail: { screen: ApiDetail }
  },
  {
    initialRouteName: 'Index',
  }
);

export default () => <AppNavigator />;