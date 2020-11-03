import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class AppHeader extends React.Component{
  
goToSummary = ()=>{
    this.props.navigation.navigate('SummaryScreen')
  }
  render(){
 
    return(
      <View style= {styles.textContainer}>
        
        <Text style={styles.text}>Story Hub</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'orange',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }

});

