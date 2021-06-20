import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class Screen2 extends Component {
    render() {
        return (
          <View style = {{flex: 1, flexDirection:'column', backgroundColor:"pink"}}>
                <Text style ={{fontSize:100}}>Page 2</Text>
                <TouchableOpacity onPress ={()=>{}}>
                   <Text style={{fontSize: 20,color:'red'}}>Back to page</Text>
                </TouchableOpacity>
          </View>
        )
    }
}