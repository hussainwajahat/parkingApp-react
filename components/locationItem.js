import React,{PureComponent} from 'react'
import { Alert ,StyleSheet, Text, View, TouchableOpacity} from 'react-native'
export default class LocationItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            homeLink:'changed txt'
        }
    }
    _handlePress = async () => {
         const res = await this.props.fetchDetails(this.props.place_id)
         console.log(JSON.stringify(res),'asdasdasd')
         console.log(this.props.inputValue(JSON.stringify(res.formatted_address)),'dddddd')
         Alert.alert(JSON.stringify(res.formatted_address));
    }
    onChangeLocation=async () => {
        const res = await this.props.fetchDetails(this.props.place_id)
        this.setState({homeLink:res.formatted_address});
        this.props.changeLocation(this.state.homeLink);
  
    }
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.root} onPress={this.onChangeLocation.bind(this)} >
                    <Text>{this.props.description}</Text>
                    {console.log(this.props.description,'aaaaaaaaaaaaaaaaaaaaaaaaaaa')}
                </TouchableOpacity>
            </View>
        
        )
    }
}

const styles = StyleSheet.create({
    root: {
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})