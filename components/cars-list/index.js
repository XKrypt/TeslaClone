import react from "react";
import cars from "./cars";
import { styles } from './styles';
import { View , FlatList, Text, Dimensions} from 'react-native';
import { render } from 'react-native-web';
import { CarItem } from "../carItem";

export function CarsList() {
        return(
            <View  style={styles.container}>
                <FlatList
                    data={cars}
                    renderItem={
                        ({item}) => <CarItem car={item} />
                    }
                    snapToAlignment={'start'}
                    decelerationRate={'normal'}
                    showsVerticalScrollIndicator={false}
                    snapToInterval={Dimensions.get('window').height}
                />
            </View>
        )
}