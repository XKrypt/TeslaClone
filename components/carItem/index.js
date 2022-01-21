import React from "react";
import styles from "./styles";
import { View, Text, ImageBackground } from "react-native";

export function CarItem(props) {
    return (<View style={styles.carContainer}>
        <ImageBackground source={require('../../assets/images/ModelX.jpeg')}
            style={styles.image} />

        <View style={styles.titles}>
            <Text style={styles.title}>Model X</Text>
            <Text style={styles.subtitle}>Starting at $67,720</Text>
        </View>
    </View>)
}

