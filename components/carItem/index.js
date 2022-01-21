import React from "react";
import styles from "./styles";
import { View, Text, ImageBackground } from "react-native";
import { StyledButton } from "../styled-button";

export function CarItem(props) {
    const { name, tagLine, taggLineCTA, image } = props.car;
    return (<View style={styles.carContainer}>
        <ImageBackground source={image}
            style={styles.image} />

        <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>
                {tagLine} {' '}
                <Text style={styles.subtitleCTA}>
                    {taggLineCTA}
                </Text>
            </Text>
        </View>


        <View style={styles.buttonsContainer}>
            <StyledButton type="primary" content="Custom Order" onPress={() => { console.warn("hey there") }} />
            <StyledButton type="secondary" content="Existing Inventory" onPress={() => { console.warn("hey there") }} />
        </View>
    </View>)
}

