import * as React from 'react';
import { Text, View, StyleSheet,Image,Platform,ImageBackground} from 'react-native';
import {Button} from 'native-base';


var myBackground=require('../assets/icons/landing.jpg')
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
        style={{flex: 1,width: '100%'}}
        source={myBackground}>
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to Poke Search</Text>
            <Button 
            style={styles.buttonStyle} 
            onPress={()=>{this.props.switchScreen("search")}}
            block={true}>
            <Text style={styles.buttonText}>Start Searching!</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.os === "android" ? 24 : 0
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 30,
    color: 'blue',
    alignItems: 'center'
  },
  buttonStyle: {
    margin: 10
  },
  buttonText: {
    color: 'white'
  }
});
