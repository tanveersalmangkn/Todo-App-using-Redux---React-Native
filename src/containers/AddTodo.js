import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Ionicons} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux';
import {addTodo} from '../actions'

class AddTodo extends Component {

  state = {
    text: ''
  }

  addTodo = (text) => {
    // Redux Store
    this.props.dispatch(addTodo(text))
    this.setState({text: ''})
  }

  render() {
    return (
      <View style= {{flexDirection: 'row', marginHorizontal: 20}}>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Example: I have to Turn on the Motor"
          style={{
            borderWidth: 1,
            borderColor: '#f2f2e1',
            backgroundColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 35, fontWeight: 'bold'}}>+</Text>
            </View>
        </TouchableOpacity>
      </View>


    );
  }
}

export default connect()(AddTodo);
