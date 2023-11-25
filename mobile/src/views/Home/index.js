import { View, Text } from "react-native";
import styles from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Home(){
    return(
        <View style={styles.container}>
            <Header />
            <Footer />
        </View>
    )
}