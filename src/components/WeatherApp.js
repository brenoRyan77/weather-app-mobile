import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../styles/styles';

const WeatherApp = () => {
    const cityName = "New York"; // Exemplo de nome da cidade
    const temperature = "25"; // Exemplo de temperatura
    const wind = "10";
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Weather App</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o nome da cidade"
                        placeholderTextColor="#fff"
                    />
                    <Button title="Buscar" style={styles.button} />
                </View>
                <View style={styles.weatherInfoContainer}>
                    <Text style={styles.cityName}>{cityName}</Text>
                    <View style={styles.weatherDetails}>
                        <Text style={styles.temperature}>Temperatura</Text>
                        <Text style={styles.wind}>Vento</Text>
                    </View>
                    <View style={styles.weatherDetails}>
                        <Text style={styles.weatherLabel}>{temperature} <Text style={styles.degreeSymbol}>℃</Text></Text>
                        <Text style={styles.weatherLabel}>{wind} <Text style={styles.degreeSymbol}>km/h</Text></Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default WeatherApp;