import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View,Button,ImageBackground,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './src/Components/DetailScreen';


// // const HomeScreen = ({ navigation: { navigate } })=>{
//   const HomeScreen = ({ navigation})=>{
//   const image = { uri: "https://www.dungplus.com/wp-content/uploads/2019/10/anh-avatar-dep-nhat.jpg" };
//   return (
// ///// push data to Detail
//     // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     //   <Text>This is the home screen of the app</Text>
//     //   <Button
//     //     onPress={() =>
//     //       navigate('Detail', { names: ['Brent', 'Satya', 'Michaś'] })
//     //     }
//     //     title="Go to Brent's profile"
//     //   />
//     // </View>

//     <View style={{ flex: 1,flexDirection:'column'}}>
//       <ImageBackground source={image} style={{ flex: 1,flexDirection:'column', resizeMode: "cover", justifyContent: "flex-start"}}>
//          <View style={styles.container2}>
//               <View style={styles.containerTextInput}>
//                 <TextInput 
//                 // ref={(refs) => (this.txtVnRef = refs)}
//                 onChangeText={(text) => {
//                   // const textVn = [];
//                   // textVn = text;
//                 // navigate({ text: text });
//                 }}
//                 placeholder= "Nhập tên tỉnh" style={styles.textInput} />
//               </View>
//               <View style={styles.containerTouchSearch}> 
//                 <TouchableOpacity
//                   onPress={() => navigation.navigate('Detail')}
//                   // onPress={() => navigate('Detail', { textVn: textVn})}
//                   style={styles.TouchSearch}>
//                   <Text style={styles.textStyleSearch}>Tìm</Text>
//                 </TouchableOpacity>
//               </View>
//           </View>
//       </ImageBackground>
//     </View>
// );  
// }
// const styles = StyleSheet.create({
//   container2: {flex: 0.1, flexDirection: 'row', justifyContent: 'center'},
//   containerTouchSearch: {
//     flex: 0.2,
//     alignItems: 'center',
//     marginTop: 5,
//   },
//   containerTextInput: {
//     flex : 0.8,
//     marginTop: 5,
//   },
//   textInput: {
//     borderWidth: 1,
//     borderRadius: 5,
//     marginLeft: 5,
//     height: 40,
//     fontSize: 15,
//     paddingHorizontal: 5,
//   },
//   TouchSearch: {
//     padding: 10,
//     backgroundColor: 'green',
//     borderRadius: 100,
//   },
//   textStyleSearch: {fontSize: 15, fontWeight: '500', color: 'black'},
// });
// export default HomeScreen;


const Stack = createStackNavigator();
class HomeScreen extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      shouldShowForm: true,
      txtVn: '',
    };
  }
//// change state button
  toggleForm = () => {
    const {txtVn} = this.state;
    if (txtVn.length <= 0) {
      alert('Không có thông tin!');
      return;
    }else{ this.setState({shouldShowForm: !this.state.shouldShowForm});
    }};
  toggleFormBack = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm})
    }
/////
    renderForm = () => {
      const word = {back: '<Trở về',
                    award: 'Tiếp>'};
      const image3 = { uri: "https://img.thuthuatphanmem.vn/uploads/2018/10/13/anh-dai-dien-dep-de-thuong-nhat_041803834.jpg" };
     if (this.state.shouldShowForm) {
        return (
            <ImageBackground source={image3} style={styles.image}>
              <View style={styles.container2}>
                <View style={styles.containerTextInput}>
                  <TextInput 
  //////change text input
                  ref={(refs) => (this.txtVnRef = refs)}
                  onChangeText={(text) => {
                    this.state.txtVn = text;
                  }}
                  placeholder= "Nhập tên tỉnh" style={styles.textInput} />
                </View>
                <View style={styles.containerTouchSearch}>
                  <TouchableOpacity
                    onPress={this.toggleForm}
                    style={styles.TouchSearch}>
                    <Text style={styles.textStyleSearch}>Tìm</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
        );
      }else{
        return (
          <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Detail" component={DetailScreen} />
              </Stack.Navigator>
          </NavigationContainer>
        )
      }
  };
///// run main
    render() {
      return this.renderForm(); 
    }
};
//// StyleSheet
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    flexDirection: 'column',
    justifyContent: "flex-start"
  },
  //// Screen 2
    container4: {flex: 0.2, flexDirection: 'column'},
  containerTextTinh: {
    flex: 0.7,
    flexDirection: 'row',
  },
  containerTinh: {
    flex: 0.2,
    justifyContent: 'center',
    marginTop: 5,
  },
  textStyleTinh: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 5,
  },
  containerTextInput1: {
    flex: 0.8,
    justifyContent: 'center',
    marginTop: 5,
  },
  textStyleTextInput: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 5,
  },
  containerTextTP: {
    flex: 0.7,
    justifyContent: 'center',
    marginTop: 5,
  },
  textStyleTP: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 5,
  },
  containerTouchBack: {
    flex: 0.3,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  TouchBack: {
    flex: 0.2,
    padding: 2,
    backgroundColor: 'gray',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    marginTop: 3,
  },
  textStyleBack: {fontSize: 15, fontWeight: '500', color: 'black'},
  TouchAward: {
    flex: 0.2,
    padding: 2,
    backgroundColor: 'gray',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    marginTop: 3,
  },
  textStyleAward: {fontSize: 15, fontWeight: '500', color: 'black'},
  //// Screen 1
  container: {flex: 1, flexDirection: 'column', backgroundColor: 'pink'},
  container2: {flex: 0.1, flexDirection: 'row', justifyContent: 'center'},
  containerTouchSearch: {
    flex: 0.2,
    alignItems: 'center',
    marginTop: 5,
  },
  containerTextInput: {
    flex : 0.8,
    marginTop: 5,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    height: 40,
    fontSize: 15,
    paddingHorizontal: 5,
  },
  TouchSearch: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 100,
  },
  textStyleSearch: {fontSize: 15, fontWeight: '500', color: 'black'},
});
export default HomeScreen;