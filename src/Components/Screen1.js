import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class Screen1 extends Component {
    render() {
        return (
          <View style = {{flex: 1, flexDirection:'column', backgroundColor:"pink"}}>
                <Text style ={{fontSize:100}}>Page 1</Text>
                <TouchableOpacity onPress ={()=>{}}>
                   <Text style={{fontSize: 20,color:'red'}}>Go next page</Text>
                </TouchableOpacity>
          </View>
        )
    }
}