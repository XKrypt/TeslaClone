import React from "react";
import styles from "./styles";
import { View, Text, ImageBackground, Pressable } from "react-native";

export function StyledButton({type, content, onPress}) {

    const buttontype = type;

    const backgroundColor = buttontype === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const textColor = buttontype === 'primary' ? '#FFFFFF' : '#171A20'
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={ () => {
                   onPress()
                }}
            >
                <Text style={[styles.text, {color : textColor}]} >{content}</Text>
            </Pressable>
        </View>)
}

