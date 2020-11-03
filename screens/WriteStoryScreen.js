import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import { Header } from 'react-native-elements';



export default class WriteStoryScreen extends React.Component{
    
    constructor() {
        super();
        this.state = {
            title: "",
            author: "",
            story: "",
        }
    }

    submitStory=()=>{
        
        this.setState({
          title: "",
          author: "",
          story: "",
        })
      }

    render(){

         return(
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        
        <Header
          backgroundColor={'#DF3A01'}
          centerComponent={{
            text: 'STORY HUB',
            style: {
              width:500,
              color: '#FFFFFF',
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
          placeholder="Write your Story here"
          multiline={true}
          onChangeText={(text) => {
            this.setState({ story: text });
          }}
          value={this.state.story}></TextInput>

        <TouchableOpacity style={styles.submitButton} onPress={()=>{
          this.submitStory()
        }}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
                    </View>

         )
    
    }


}
const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: '#DF3A01',
    marginTop: 20,
    width: 150,
    height: 50,
    borderWidth: 1.5,
    borderColor: '#FF0000',
    marginBottom: 10,
    borderRadius: 15,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: '#F5BCA9',
    flex: 1,
    alignItems: "center"
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 7,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  inputBox: {
    width: '80%',
    height: 70,
    borderWidth: 2,
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    fontWeight: 'bold',
    color: '#DF3A01',
  },
  content: {
    backgroundColor: 'white',
    marginTop: 30,
    width: '80%',
    fontWeight: 'bold',
    color: '#DF3A01',
    height: 350,
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 20,
  },
});