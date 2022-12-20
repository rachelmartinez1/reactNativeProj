import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from './components/Header';

const App = () => {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: 'darkslateblue',
        fontSize: 20
    }
})

export default App;