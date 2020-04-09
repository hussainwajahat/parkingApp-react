import React,{Component,Fragment} from 'react'
import { StyleSheet, Text, View ,TextInput , TouchableOpacity , ScrollView , ActivityIndicator} from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import  LocationItem  from './locationItem';
import SearchableDropdown from 'react-native-searchable-dropdown';

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            locationText :'',
            typeText:'',
            isVisible : true,
            serverData: [],
            selecteditem:'',
            reset:false
        }
        _this = this;
    }
    ChangeLocation(newLocation){
        this.setState ({
            locationText : newLocation
        })
        console.log(this.state.locationText,'LocationText')
        this.setState({isVisible:false})
        this.refs.location = this.state.locationText;
    }
    Visible(){
        this.setState({isVisible:true})
        console.log('isvisible')
    }
    navigateToParkingSlots(){
        this.state.locationText = '';
        this.setState({reset:true});
        this.setState({reset:false});
        // this.refs.location.clear();
        this.props.navigation.navigate( 'parkingSlots',this.state.selecteditem)

    }
    componentDidMount() {
        fetch('https://parking-app-api.herokuapp.com/locations/')
          .then(response => response.json())
          .then(responseJson => {
            //Successful response from the API Call
            this.setState({
              serverData:responseJson
              //adding the new data in Data Source of the SearchableDropdown
            });
            console.log(this.state.serverData,'sssssss')

          })
          .catch(error => {
            console.error(error);
          });
      }
    render(){
        const API_KEY = 'AIzaSyC89oajUM1lnOf4t6k4DGwVQe5NHCOATKE';
        return(
            <View style={styles.infoContainer}>
            <SearchableDropdown
          onTextChange={text => console.log(text)}
          //On text change listner on the searchable input
          onItemSelect={item => {this.setState({
              selecteditem:JSON.stringify(item)})
              this.setState({isVisible:false})}}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '50%',
          }}
          items={this.state.serverData}
          //mapping of item array
          defaultIndex={2}
          //default selected item index
          placeholder="Select Location "
          //place holder for the search input
          resetValue={this.state.reset}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
            {/* <GoogleAutoComplete apiKey={API_KEY} debounce={500} components='country:pk' radius="5000">
                {
                    ({handleTextChange , locationResults , fetchDetails , isSearching , inputValue})=>(
                        <Fragment>
                            
                            <View>
                            <TextInput style={styles.input}  ref = {'location'}placeholder='Where you wanna go' autoCorrect={false} value={this.state.locationText!=''? this.state.locationText:inputValue}
            onChangeText={ handleTextChange} onFocus={this.Visible.bind(this)}></TextInput>
                            </View> 
                            {isSearching && < ActivityIndicator size="large" color='blue'/>}
                           {  <ScrollView>
                                {console.log(inputValue,'jjjjjjjjjjjjjjjjjjjjjjjjjjj')}
                                { this.state.isVisible && locationResults.map((el , i) => (
                                    <LocationItem {...el}
                                    // key={el.id} 
                                    fetchDetails={fetchDetails}
                                    changeLocation={this.ChangeLocation.bind(this)}
                                    key={String(i)}
                                    />
                                ))}
                            </ScrollView>
                        }
                        </Fragment>
                    )
                }
            </GoogleAutoComplete> */}
            <TouchableOpacity style={styles.btnContainer}  disabled={this.state.isVisible}
                onPress={
                        this.navigateToParkingSlots.bind(this)
                  } >
                <Text style={styles.btnText}>Book My Spot</Text>
            </TouchableOpacity>
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
    },
    btnContainer: {
        marginTop:'10%',
        width: '100%', 
      height: 50, 
      alignSelf: 'flex-end',
      position: 'relative',
        bottom:30,
        alignContent:'center',
      backgroundColor: '#3F80F3', 
      justifyContent: 'center',
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    infoContainer: {
        flex: 1,
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        paddingTop: 20,
        paddingLeft:20,
        paddingRight:20,
       
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
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    }
})