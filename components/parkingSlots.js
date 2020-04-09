import React,{Component} from 'react'
import { StyleSheet, Text, View ,Animated,ScrollView,TouchableHighlight,TouchableOpacity} from 'react-native'
export default class parkingSlots extends Component{
     constructor(props) {
            super(props);
            this.props= props;
            this.state ={
                selecteditem:{}
            }
            this.index = 0;
            this.animatedValue = new Animated.Value(0);
            _this = this;
        }
        
    render(){
        const {navigate} = this.props.navigation;
        const  slot =JSON.parse(this.props.navigation.state.params)
        {console.log(slot.slots,'dsfsdfsdfsdss')}
        var slots = [];
       
         for(let i = 1; i <= slot.slots; i++){
             slots.push(
                 
                <TouchableOpacity style={[styles.viewHolder]}  
                onPress={()=> {
                        navigate( 'bookslot')
                    }
                  } >
                <Text style={styles.headerText}>Spot {i}</Text>
            </TouchableOpacity>
             )
         }
        return(
        <View style={styles.container} >
        <ScrollView>
                 <View style={styles.container}>
                     {slots}                
        </View>
        </ScrollView>
        </View>
        )
    }
}
         

const styles = StyleSheet.create({
    
        container: {
          flex: 1,
        },
        viewHolder: {
          height: 55,
          backgroundColor: '#3F80F3',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 4
        },
        headerText: {
          color: 'white',
          fontSize: 25
        },
        buttonDesign: {
          position: 'absolute',
          right: 25,
          bottom: 25,
          borderRadius: 30,
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
        },
        buttonImage: {
          resizeMode: 'contain',
          width: '50%',
        }
    // container: {
    //     // backgroundColor: 'white',
    //     // flex: 2,
    //     // flexDirection:'row',
    //     // marginTop:14,
    //     // // alignItems: 'flex-start',
    //     // alignItems: 'center',
    //     // justifyContent: 'center',
    //      flex: 1, padding: 4 
    // },
    // container2: {
    //     backgroundColor: 'white',
    //     flex: 1,
    //     flexDirection:'row',
    //     marginTop:75,
    //     // alignItems: 'flex-start',
    //     justifyContent: 'space-around',
    // },
    // title: {
    //     fontSize: 18,
    //     alignSelf:'center',
    //     marginTop: 12
    // },
    // btnContainer: {
    //     flex: 1,
    //     width: 90, height: 60,  backgroundColor: 'blue',
    // },
    // btnText: {
    //     textAlign: 'center',
    //     color: 'white',
    //     alignSelf:'center',
    //     marginTop: 12,
    //     fontSize: 18
    // }
})