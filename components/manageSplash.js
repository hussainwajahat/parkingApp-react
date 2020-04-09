import React,{ Component } from "react";
import Splash from './Splash'
import Login from './Login'

export default class manageSplash extends Component {
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
        const {currentScreen} =this.state
        let mainScreen = currentScreen === 'Splash' ?   this.props.navigation.navigate( 'splash') :  this.props.navigation.navigate( 'login')
        return (
            mainScreen
          );
    }
}
