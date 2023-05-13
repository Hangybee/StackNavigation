import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

const Home = ({navigation}) => {
    const [name, setName] = useState('')
    const age = 26
    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <TextInput placeholder="enter name" onChangeText={(event)=>setName(event)} />
            <Button
                title="Go to contact "
                onPress={()=>navigation.navigate('Contact',{name,age})} // passing as a props to contact component
            />
        </View>
    );
};

export default Home;
