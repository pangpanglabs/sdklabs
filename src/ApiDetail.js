import React from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
} from 'react-native';
import { buildURL, callAPI } from './possdk'

class ApiDetail extends React.Component {    
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.api.path,
  });
  constructor(props) {
    super(props);

    const api = this.props.navigation.state.params.api
    this.state = {
      params: api.params,
      url: buildURL(api.path, api.params),
      res: {},
      elapsedTime: 0,
    };
  }

  render() {
    const api = this.props.navigation.state.params.api;
    return (
      <View>
        {Object.keys(api.params).map((k,v) => (
          <View style={{flexDirection: 'row'}} key={k}>
            <Text style={{flex: 1}}>{k}:</Text>
            <TextInput style={{flex: 2}}
              value={this.state.params[k]}
              onChangeText={(text) => {
                const params = this.state.params
                params[k] = text
                this.setState({
                  params: params,
                  url: buildURL(api.path, this.state.params)
                })
              }}
            />
          </View>
        ))}
        <Text style={{fontSize: 18, fontWeight: 'bold' }}>{this.state.url}</Text>
        <Button
          title='Call'
          onPress={() => {
              const start = new Date()
              callAPI(this.state.url, res => {
                this.setState({res: res, elapsedTime: Math.abs(new Date()-start)})
              })
            }
          }
        />
        <ScrollView>
          <Text>Elapsed time: {this.state.elapsedTime}ms</Text>
          <Text>Response: {JSON.stringify(this.state.res, null, 2)}</Text>
        </ScrollView>
      </View>
    );
  }
}

export default ApiDetail;