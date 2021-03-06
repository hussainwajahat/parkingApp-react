import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
export default class Splash extends Component {
    render(){
        return(
                <View style={styles.container} ref={this.props.innerRef}>
                    <Text style={styles.title}>Park X</Text>
                    <Text style={styles.title}>Welcome!</Text>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})