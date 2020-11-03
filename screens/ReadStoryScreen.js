import * as React from 'react';
import {Text, View} from 'react-native';
import { Header } from 'react-native-elements';


export default class ReadStoryScreen extends React.Component{


    render(){

         return(


            <View>
            
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
                <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Text>Read A Story</Text>
                </View>
            </View>

         )
    
    }


}