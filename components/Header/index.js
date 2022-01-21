import react from "react";
import styles  from './styles';
import { View , Image} from 'react-native';

export function Header() {
    return (<View style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/images/logo.png")} />
            <Image style={styles.menu} source={require("../../assets/images/menu.png")} />
    </View>)
}
