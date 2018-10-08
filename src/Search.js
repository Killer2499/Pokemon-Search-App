import  React from 'react';
import { Text, View, StyleSheet,Image,Platform,ImageBackground} from 'react-native';
import {Header,Input,Item,Icon,Button} from 'native-base';
import PokeLoader from './PokeLoader.js';
import SearchBody from './SearchBody.js';
import axios from 'axios';

 class Search extends React.Component {
   state={
     pokeSearch: "",
     onCall: true,
     data: {}
   }
   searchPoke =() =>{
     this.setState({onCall: true});
     var self =this;
     axios.get("http://pokeapi.co/api/v2/pokemon/" +  this.state.pokeSearch.toLowerCase())
     .then(function(response){
       console.log(response.data);
       self.setState({data: response.data})
       self.setState({onCall: false})
     })
     .catch(function(error){
       return(
         <PokeLoader />
       )
     })
   }
  renderBody = () =>{
		if(this.state.onCall){
			return(
				<PokeLoader />
			)
		}
		else{
			return(
				<SearchBody data={this.state.data} />
			)
		}
	}
  render() {
    return (
      <View style={{flex: 1,marginTop: 25}}>
        <Header
        searchBar
        rounded
        > 
        <Item>
        <Icon name="ios-search" onPress={this.searchPoke}>
        </Icon>
        <Input
        value={this.state.pokeSearch}
        placeholder="Search Pokemon"
        onChangeText={(pokeSearch) => this.setState({pokeSearch})}>
        
        </Input>
        </Item>
        
        </Header>
        {this.renderBody()}
      </View>
    );
  }
}

export default Search;