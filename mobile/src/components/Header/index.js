import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

export function Header(){
    return(
        <View style={styles.header}>
            <Image source={logo} style={styles.logo} />

            <TouchableOpacity style={styles.notification}>  
                <Image source={bell} />
            </TouchableOpacity>
        </View>
    )
}