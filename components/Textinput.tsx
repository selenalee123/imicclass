export type Props = {
    style?: ViewStyle |ViewStyle[]; //? mean optional 
    buttonText: string;
    textStyle: TextStyle;
    onPress: () =>void;
}

const TextInput:React.FC<Props> =({style,buttonText,textStyle, onPress}) => {
    return (
        <View>
        <TextInput
     placeholder="username"
     value={data}
     onChangeText={setData}
     style={{
       color:"black",
       fontSize:18,
       borderColor:"gray",
       borderWidth:1,
       borderRadius:10,
       height:40,
       width:"95%",
       marginBottom:10

     }}  
     placeholderTextColor="grey"
     />   
     </View>
)}

export default MyButton

export {MyButton as MyButton2};