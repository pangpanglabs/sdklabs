import React from 'react';
import {
  SectionList,
  Button,
  Header,
  View,
  Text,
} from 'react-native';

import ApiItem from './ApiItem';

const apis = [
  {
    name: 'account',
    data: [
      {
        path: '/account/login',
        params: {
          tenant: 'ELAND',
          username: 'salesman',
          password: '1234',        
        },
      },
      {
        path: '/account/external-login',
        params: {
          tenant: 'ELAND',
          token: '1234',        
        },
      },
    ],    
  },
  {
    name: 'catalog',
    data: [
      {
        path: '/catalog/search-contents',
        params: {
          q: '',
          skipCount: "0",
          maxResultCount: "30",
        }
      },
      {
        path: '/catalog/get-content',
        params: {
          id: "1",
        }
      }
    ]
  }
]

class ApiList extends React.Component {  
  static navigationOptions = {
    title: 'API LIST',
  };
  render() {
    return (
      <SectionList
        renderItem={({item}) => <ApiItem api={item} navigation={this.props.navigation} />}
        renderSectionHeader={({section}) => <View><Text>{section.name}</Text></View>}
        keyExtractor={(item, index) => index}
        sections={apis}
    />)
  }
}

export default ApiList;