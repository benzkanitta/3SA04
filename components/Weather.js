import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.cover}>
                <Text style={styles.medium}>Zip Code: {props.zipCode}</Text>
                <Text style={styles.big}> main {props.main}</Text>
                <Text style={styles.medium}> description {props.description}</Text>
                <Text style={styles.medium}> °C {props.temp}</Text>
                <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    cover: {
        backgroundColor: 'black',
        width: '100%',
        height: 200,
        opacity:0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    big: {
        fontSize: 30,
        color:"white",
        
    },
    medium: {
        alignItems: 'center',
        fontSize: 24,
        color:"white",
    }
});
