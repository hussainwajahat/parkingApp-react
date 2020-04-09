 /**
 * @format
 */
import React,{ Component } from "react";
import {AppRegistry , Text} from 'react-native';
import App from './App';
import Login from './components/Login'
import Splash from './components/Splash'
import parkingSlots from './components/parkingSlots'
import bookSlot from './components/bookSlot';
import LocationItem from './components/locationItem'
import home from './components/home';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import  manageSplash  from './components/manageSplash';
import Register from "./components/register";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash'};
        console.log('start some tests about 5 seconds')
        setTimeout(()=>{
            console.log('dome some tests')
            this.setState({currentScreen:'Login'})
        },3000)
    }
    
    render(){
      console.disableYellowBox = true;
        const {currentScreen} =this.state
        let mainScreen = currentScreen === 'Splash' ?  <Login /> : <Login />
        return (
            <AppContainer/>
          );
    }
}
const AppNavigator = createStackNavigator({
    manageSplash: {
        screen: manageSplash,
        navigationOptions: {
            header: null,
        }
    },
    login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    register: {
      screen: Register,
        navigationOptions: {
            header: null,
          }
    },
    splash: {
        screen: Splash,
        navigationOptions: {
            header: null,
          }
    },
    parkingSlots:{
        screen: parkingSlots,
        navigationOptions: () => ({
            title: `Available Spot`
          }),
       
    },
    Home:{
        screen: home,
        navigationOptions: () => ({
            title: `Welcome`,
            headerLeft:null
          }),
       
    },
    bookslot:{
        screen: bookSlot,
        navigationOptions: () => ({
            title: `Book My Spot`,
          }),
    }
  });
const AppContainer = createAppContainer(AppNavigator);
 export default AppContainer;
AppRegistry.registerComponent(appName, () => Main);
