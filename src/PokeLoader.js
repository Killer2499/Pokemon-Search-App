import React from 'react';
import {View,Image,Text} from 'react-native';

class PokeLoader extends React.Component{
	render(){
		return(
			<View style={{flex: 1}}>
				<Image 
					source={{uri: "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}}
					style={styles.img}
				/>
       <Text style={styles.loaderText}>Start Searching!</Text>
			</View>
		)
	}
}

const styles = {
	img: {
		height: 400,
		width: 400,
		justifyContent: 'center',
		alignItems: 'center'
	},
  loaderText:{
    textAlign: 'center',
    fontSize: 40,
    marginTop: 35,
    color: '#011848'
  }
}

export default PokeLoader;