import React, { Component } from "react";
import { StyleSheet, Text, View, Image,
        TouchableWithoutFeedback,StatusBar,
    TextInput, SafeAreaView, Keyboard, Alert, TouchableOpacity,
    KeyboardAvoidingView,ActivityIndicator } from "react-native";
import {StackActions, NavigationActions } from 'react-navigation';
import { Redirect } from "react-router-native";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.props= props;
        this.state ={
            Username :'',
            Password :''
        }
    }
    login() {
        
        if(this.state.Username && this.state.Password){
            this.setState({animating:true});        
             this.handlePress();
        }else {
            Alert.alert("Username and Password Wrong try again");
            this.refs.txtUsername.clear();
            this.refs.txtPassword.clear();
            this.setState({animating:false});        
        }
        
   }
   register(){
    this.props.navigation.navigate( 'register')
   }

   handlePress() {
        fetch('https://parking-app-api.herokuapp.com/login', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            email: this.state.Username,
            password: this.state.Password,
            })
        }).then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.email && responseJson.password){
                this.props.navigation.navigate( 'Home')
                this.setState({animating:false});
            }else{
                Alert.alert("Username and Password Wrong try again");
                this.refs.txtUsername.clear();
                this.refs.txtPassword.clear();
                this.setState({animating:false});
            }
        })
        .catch((error) => {
          console.error(error);
        });
   }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <KeyboardAvoidingView  style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container}>
                        <View style={styles.container}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo}
                                source={require('../images/login.png')}>
                                </Image>
                                <Text style={styles.title}>Account Information</Text>
              
                            </View>
                            {/* <ActivityIndicator
                                animating={this.state.animating}
                                style={[{height: 80}]}
                                color="#C00"
                                size="large"
                                hidesWhenStopped={true}
                                /> */}
                                {
            this.state.animating && <View style={{ position: 'absolute', top:"50%",right: 0, left: 0 }}>
                <ActivityIndicator size="large" color="red" />
            </View>
        }
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input} placeholder='Enter Username/Email' keyboardType="email-address" ref={'txtUsername'}
                                returnKeyType="next" onChangeText={(text) => this.setState({Username:text})} autoCorrect={false} onSubmitEditing={()=>this.refs.txtPassword.focus()}></TextInput>
                                <TextInput style={styles.input} placeholder='Enter Password' ref={'txtPassword'}
                                returnKeyType="go" secureTextEntry autoCorrect={false} onChangeText={(text) => this.setState({Password:text})}></TextInput>
                                <TouchableOpacity style={styles.btnContainer}  
                                    onPress={()=> {
                                        this.login()
                                        }
                                      } >
                                    <Text style={styles.btnText}>SIGN IN</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=> {
                                        this.register()
                                        }
                                      } >
                                    <Text style={styles.btnRegister}>REGISTER</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView> 
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 80,
        height: 80,
    },
    title: {
        color: '#3F80F3',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 5,
        opacity: 0.9
    },
    infoContainer: {
        position: 'relative',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
    },
    input: {
        height: 40,
        // backgroundColor: 'grey'
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'gray',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    btnContainer: {
        backgroundColor: '#3F80F3',
        paddingVertical:15
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    btnRegister: {
        color:'red'
    }
})