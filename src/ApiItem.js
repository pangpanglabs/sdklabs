import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

class ApiItem extends React.Component {
  constructor(props) {
    super(props);    
  }
  render() {
    return (
      <View>
        <Button 
          key={this.props.api.path}
          title={this.props.api.path}
          onPress={() => this.props.navigation.navigate('ApiDetail', { api: this.props.api })} 
        />
      </View>
    );
  }
}
export default ApiItem;