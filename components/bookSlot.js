import React,{Component} from 'react'
import { StyleSheet, Text, View , TextInput , TouchableOpacity} from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
export default class bookSlot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            isVisibleTimer: false,
            isVisibleDepTimer: false,
            chosenDate: ''
        }
    }

    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM,Do YYYY')

        })
    }
    
    hidePicker = () => {
        this.setState({
            isVisible: false
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }

    handleTimePicker = (datetime) => {
        this.setState({
            isVisibleTimer: false,
            chosenArivalTime: moment(datetime).format('HH:mm')

        })
    }
    
    hideTimePicker = () => {
        this.setState({
            isVisibleTimer: false
        })
    }

    showTimePicker = () => {
        this.setState({
            isVisibleTimer: true
        })
    }
    handleDepTimePicker = (datetime) => {
        this.setState({
            isVisibleDepTimer: false,
            chosenDepTime: moment(datetime).format('HH:mm')

        })
    }
    
    hideDepTimePicker = () => {
        this.setState({
            isVisibleDepTimer: false
        })
    }

    showDepTimePicker = () => {
        this.setState({
            isVisibleDepTimer: true
        })
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
                <View style={styles.infoContainer}>
                {/* <TextInput style={styles.input} placeholder='First Name' keyboardType='default'
                returnKeyType="next" autoCorrect={false} onSubmitEditing={()=>this.refs.txtlastName.focus()}></TextInput>
                <TextInput style={styles.input} placeholder='Last Name' keyboardType='default' ref={'txtlastName'}
                returnKeyType="next" autoCorrect={false} onSubmitEditing={()=>this.refs.txtPassword.focus()}></TextInput>
                <TextInput style={styles.input} placeholder='Contact No' ref={'contact'} keyboardType='phone-pad'
                returnKeyType="go" secureTextEntry autoCorrect={false}></TextInput> */}
                <TouchableOpacity style={styles.button} onPress={this.showPicker}><Text style={styles.text}> Select Date</Text></TouchableOpacity>
                <Text style={{color:'red',fontSize: 20, }}>{this.state.chosenDate}</Text>
                <DateTimePicker isVisible={this.state.isVisible}
                onConfirm={this.handlePicker} is24Hour={true} mode={'date'}
                onCancel={this.hidePicker}  datePickerModeAndroid='spinner'></DateTimePicker>
                <DateTimePicker isVisible={this.state.isVisibleTimer}
                onConfirm={this.handleTimePicker} is24Hour={true} mode={'time'}
                onCancel={this.hideTimePicker}  datePickerModeAndroid='spinner'></DateTimePicker>
                  <TouchableOpacity style={styles.button} onPress={this.showTimePicker}><Text style={styles.text}> Arival Time</Text></TouchableOpacity>
                <Text style={{color:'red',fontSize: 20, }}>{this.state.chosenArivalTime}</Text>
                <DateTimePicker isVisible={this.state.isVisibleDepTimer}
                onConfirm={this.handleDepTimePicker} is24Hour={true} mode={'time'}
                onCancel={this.hideDepTimePicker}  datePickerModeAndroid='spinner'></DateTimePicker>
                  <TouchableOpacity style={styles.button} onPress={this.showDepTimePicker}><Text style={styles.text}> Departure Time</Text></TouchableOpacity>
                <Text style={{color:'red',fontSize: 20, }}>{this.state.chosenDepTime}</Text>
                <TextInput style={styles.input} placeholder='Hours' keyboardType='number-pad'
                returnKeyType="next" autoCorrect={false} ></TextInput>
                <TouchableOpacity style={styles.btnContainer}  
                    onPress={()=> {
                            navigate( 'Home')
                        } 
                    } >
                    <Text style={styles.btnText}>Book</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column'
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
        marginTop:130,
        paddingVertical:15
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    infoContainer: {
        position: 'relative',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    button: {
        width:318,
        height:50,
        backgroundColor: '#3F80F3',
        borderRadius:6,
        justifyContent:'center',
        marginTop: 15
    },
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    }
      
})