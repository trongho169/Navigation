import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View,Button ,ImageBackground,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
// import HomeScreen from './src/Components/HomeScreen';

// const DetailScreen = ({ navigation, route })=>{
//   // const DetailScreen = ({ navigation})=>{
//   const image = { uri: "https://taimienphi.vn/tmp/cf/aut/mAKI-top-anh-dai-dien-dep-chat-1.jpg" };
//   return (
// ///// Get data from HomeScreen to Detail    
//     // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     //   <Text>Profile Screen</Text>
//     //   <Text>Friends: </Text>
//     //   <Text>{route.params.names[0]}</Text>
//     //   <Text>{route.params.names[1]}</Text>
//     //   <Text>{route.params.names[2]}</Text>
//     //   <Button title="Go back" onPress={() => navigation.goBack()} />
//     // </View>
// /////////
//     <View style={{ flex: 1,flexDirection:'column'}}>
//       <ImageBackground source={image} style={{ flex: 1,flexDirection:'column', resizeMode: "cover", justifyContent: "center",justifyContent: "flex-start"}}>
//           <View style={styles.container4}>
//              <View style={styles.containerTouchBack}>
//                <TouchableOpacity
//                   // onPress={() => navigation.navigate('Home')}
//                 onPress={() => navigation.goBack()}
//                   style={styles.TouchBack}>
//                   <Text style={styles.textStyleBack}>Back</Text>
//                </TouchableOpacity>
//              </View>
//             <View style={styles.containerTextTinh}>
//               <View style={styles.containerTinh}>
//                 <Text style={styles.textStyleTinh}>Tinh</Text>
//               </View>
//             </View>
//           </View>
//       </ImageBackground>
//     </View>
//   );     
// }
// const styles = StyleSheet.create({
//   container3: {flex: 1, flexDirection: 'column', backgroundColor: '#FFA57B'},
//   container5: {flex: 1, flexDirection: 'column', backgroundColor: 'rgb(65, 151, 172)'},
//   container4: {flex: 0.2, flexDirection: 'column'},
//   containerTextTinh: {
//     flex: 0.7,
//     flexDirection: 'row',
//   },
//   containerTinh: {
//     flex: 0.2,
//     justifyContent: 'center',
//     marginTop: 5,
//   },
//   textStyleTinh: {
//     color: 'black',
//     fontSize: 20,
//     fontWeight: '700',
//     paddingLeft: 5,
//   },
//   containerTextInput1: {
//     flex: 0.8,
//     justifyContent: 'center',
//     marginTop: 5,
//   },
//   textStyleTextInput: {
//     color: 'black',
//     fontSize: 20,
//     fontWeight: '700',
//     paddingLeft: 5,
//   },
//   containerTextTP: {
//     flex: 0.7,
//     justifyContent: 'center',
//     marginTop: 5,
//   },
//   textStyleTP: {
//     color: 'black',
//     fontSize: 20,
//     fontWeight: '700',
//     paddingLeft: 5,
//   },
//   containerTouchBack: {
//     flex: 0.3,
//     flexDirection:'row',
//     justifyContent: 'space-between',
//   },
//   TouchBack: {
//     flex: 0.2,
//     padding: 2,
//     backgroundColor: 'gray',
//     borderRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: 3,
//     marginTop: 3,
//   },
//   textStyleBack: {fontSize: 15, fontWeight: '500', color: 'black'},
//   TouchAward: {
//     flex: 0.2,
//     padding: 2,
//     backgroundColor: 'gray',
//     borderRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: 3,
//     marginTop: 3,
//   },
//   textStyleAward: {fontSize: 15, fontWeight: '500', color: 'black'},
//   containerPickerStyle: {
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: 'black',
//     marginHorizontal: 5,
//     padding: 10,
//     marginTop:5,
//   },
// });
// export default DetailScreen;


const Stack = createStackNavigator();
export default class DetailScreen extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      shouldShowForm: true,
      txtVn: '',
    };
  }
//// change state button
  toggleFormBack = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
    this.state.txtVn = '';
    }
/////
    renderForm = () => {
      const word = {back: '<Trở về',
                    award: 'Tiếp>'};
      const image2 = { uri: "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-dai-dien-avt-anime-1.jpg" };
   if (this.state.shouldShowForm) {
        return (
            <ImageBackground source={image2} style={styles.image}>
              <View style={styles.container4}>
                <View style={styles.containerTouchBack}>
                  <TouchableOpacity
                    onPress={this.toggleFormBack}
                    style={styles.TouchBack}>
                    <Text style={styles.textStyleBack}>{word.back}</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                    onPress={this.toggleFormAward}
                    style={styles.TouchAward}>
                    <Text style={styles.textStyleAward}>{word.award}</Text>
                  </TouchableOpacity> */}
                </View>
                <View style={styles.containerTextTinh}>
                  <View style={styles.containerTinh}>
                    <Text style={styles.textStyleTinh}>Tỉnh: </Text>
                  </View>
                  <View style={styles.containerTextInput1}>
                    <Text style={styles.textStyleTextInput}>{this.state.txtVn}</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
        );
      }else {
        return (
          <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
      </NavigationContainer>
        );
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