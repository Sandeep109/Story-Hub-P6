import * as React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import db from "../config";
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {

  constructor(){
    super();
    this.state = {
      title: "",
      author: "",
      story: "",
    }
  }

  submitStory=()=>{
    db.collection("Stories").add({
      "Title of the Story": this.state.title,
      "Author of the Story": this.state.author,
      "Story": this.state.story,
    })
    this.setState({
      title: "",
      author: "",
      story: "",
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#FF8C00'}
          centerComponent={{
            text: 'STORY HUB',
            style: {
              color: '#FF0000',
              fontSize: 30,
              fontWeight: 'bold',
            },
          }}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Title of the Story"
          onChangeText={(text) => {
            this.setState({ title: text });
          }}
          value={this.state.title}></TextInput>
        <TextInput
          style={styles.inputBox}
          placeholder="Author of the Story"
          onChangeText={(text) => {
            this.setState({ author: text });
          }}
          value={this.state.author}></TextInput>
        <TextInput
          style={styles.content}
          placeholder="Write Story"
          multiline={true}
          onChangeText={(text) => {
            this.setState({ story: text });
          }}
          value={this.state.story}></TextInput>

        <TouchableOpacity style={styles.submitButton} onPress={this.submitStory}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: '#FF8C00',
    width: 150,
    height: 50,
    borderWidth: 1.5,
    borderColor: '#FF0000',
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: "center"
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 7,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  inputBox: {
    width: 350,
    height: 70,
    borderWidth: 2,
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    fontWeight: 'bold',
    color: '#FF8C00',
  },
  content: {
    backgroundColor: 'white',
    width: 350,
    fontWeight: 'bold',
    color: '#FF8C00',
    height: 350,
    borderWidth: 2,
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
  },
});