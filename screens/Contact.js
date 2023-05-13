import React from "react";
import { View, Text } from "react-native";

const Contact = (props) => {
    // console.warn(props.route.params)
    const {name, age} = props.route.params
    console.warn(name)
    return (
        <View>
            <Text>Name:{name} </Text>
            <Text>Age :{age}</Text>
        </View>
    );
};

export default Contact;
