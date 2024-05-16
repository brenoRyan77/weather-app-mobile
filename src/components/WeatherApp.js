import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator  } from 'react-native';
import { styles } from '../styles/styles';

const WeatherApp = () => {

    const [cityName, setCityName] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false); 
    const API_KEY = "a2f9cdc2498eebfc06947d967f787dd4"
    
    const handleSearch = () => {
        if(!cityName.trim()){
            alert("Digite o nome da cidade");
            return;
        }
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName.trim()}&appid=${API_KEY}&units=metric`;
        setLoading(true);

        fetch(apiUrl).then(response => {
            if(!response.ok){
                throw Error("Cidade não encontrada");
            }
            return response.json();
        }).then(data => {
            setWeatherData(data);
        }).catch(error => {
            setWeatherData(null);
            setCityName("");
            console.error("Erro ao buscar dados do clima:", error);
            alert("Erro ao buscar dados do clima");
        }).finally(() => {
            setLoading(false)
        })
    };
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Weather App</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o nome da cidade"
                        placeholderTextColor="#fff"
                        onChangeText={(text) => setCityName(text)}
                    />
                    <Button title="Buscar" style={styles.button} onPress={handleSearch} />
                </View>
                {loading && (
                    <ActivityIndicator size="large" color="#fff" style={styles.loader} />
                )}
                {weatherData && (
                <View style={styles.weatherInfoContainer}>
                    <Text style={styles.cityName}>{weatherData.name.trim()}, {weatherData.sys.country}</Text>
                    <View style={styles.weatherDetails}>
                        <Text style={styles.temperature}>Temperatura</Text>
                        <Text style={styles.wind}>Vento</Text>
                    </View>
                    <View style={styles.weatherDetails}>
                        <Text style={styles.weatherLabel}>{weatherData.main.temp} <Text style={styles.degreeSymbol}>℃</Text></Text>
                        <Text style={styles.weatherLabel}>{weatherData.wind.speed} <Text style={styles.degreeSymbol}>km/h</Text></Text>
                    </View>
                </View>
                )}
            </View>
        </View>
    );
};

export default WeatherApp;