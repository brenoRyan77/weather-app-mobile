import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import MainCard from './src/components/MainCard';
import InfoCard from './src/components/InfoCard';
import * as Location from 'expo-location';
import getCurrentWeather from './src/api/WeatherApi';

export default function App() {

  const [darkTheme, setDarkTheme] = useState(true)
  const [currentTemperature, setCurrentTemperature] = useState('27')
  const [location, setLocation] = useState('BR, São Paulo')
  const [currentHour, setCurrentHour] = useState('13:00')
  const [wind, setWind] = useState('15')
  const [humidity, setHumidity] = useState('60')
  const [temperatureMax, setTemperatureMax] = useState('33')
  const [temperatureMin, setTemperatureMin] = useState('25')
  const [locationConcord, setLocationConcord] = useState([])	

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
      alignItems: 'center',
    },
    temperature: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    temperatureText: {
      color: darkTheme ? '#e0e0e0' : 'black',
      fontSize: 40,
      fontWeight: 'bold',
    },
    refreshButton: {
      position: 'absolute',
      margin: 30,
      alignSelf: 'flex-start',
    },
    cardView: {
      color: darkTheme ? 'black' : 'white',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 15,
    },
    info: {
      alignItems: 'center',
      backgroundColor: darkTheme ? '#393e54' : '#8f8f8f',
      width: 350,
      height: 230,
      borderRadius: 20,
      marginTop: 20,
    },
    infoText: {
      color: darkTheme ? '#e0e0e0' : 'white',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 15,
    },
    infoCard: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    themeButton: {
      margin: 10,
      marginLeft: 300,
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    squareButton:{
      backgroundColor: darkTheme ? '#f2f2f2' : '#8f8f8f',
      justifyContent: 'center',
      borderRadius: 20,
      marginRight: 20,
      width: 50,
      height: 25,
    },
    circleButton: {
      alignSelf: darkTheme ? 'flex-end' : 'flex-start',
      backgroundColor: darkTheme ? '#232634' : '#f2f2f2',
      margin: 5,
      width: 20,
      height: 20,
      borderRadius: 50,
    },
  });

  async function setCurrentWeather(){
    await getLocation()
    let date = new Date()
    setCurrentHour(date.getHours() + ':' + date.getMinutes())
    const data = await getCurrentWeather(locationConcord)
    setCurrentTemperature(convertKelvinInCelsius(data[0]))
    setTemperatureMin(convertKelvinInCelsius(data[1]))
    setTemperatureMax(convertKelvinInCelsius(data[2]))
    setLocation(data[3])
    setWind(data[4])
    setHumidity(data[5])
  }

  function convertKelvinInCelsius(kelvin){
    return parseInt(kelvin - 273.15)
  }

  async function getLocation(){
    let { status } = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted'){
      setErroMsg('Permission to access location was denied');
      return
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocationConcord(location.coords);
  }

  //results = [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]
  useEffect(() =>{
    setCurrentWeather()
  }, [])

  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setCurrentWeather()} style={[styles.refreshButton, { marginTop: 50}]}>
        <EvilIcons name="refresh" size={30} color={darkTheme ? 'white' : 'black'} />
      </TouchableOpacity>

      <Feather name="sun" style={{marginTop: 100}} size={40} color="orange" />
      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{currentTemperature}</Text>
        <Text style={[styles.temperatureText, { fontSize: 14 }]}>℃</Text>
      </View>

      <Text style={[styles.temperatureText, { fontSize: 14 }]}>{location}, {currentHour}</Text>

      <View style={styles.cardView}>
        <MainCard title={'Manhã'} backgroundColor={ darkTheme ? '#ff873d' : '#cc6e30'} icon={'morning'} temperature={'25'}></MainCard>
        <MainCard title={'Tarde'} backgroundColor={ darkTheme ? '#D29600' : '#FCC63F'} icon={'afternoon'} temperature={'29'}></MainCard>
        <MainCard title={'Noite'} backgroundColor={ darkTheme ? '#008081' : '#38B7B8'} icon={'night'} temperature={'33'}></MainCard>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}>Informações Adicionais</Text>
        <View style={styles.infoCard}>
          <InfoCard title={'Vento'} value={wind + ' km/h'}></InfoCard>
          <InfoCard title={'Umidade'} value={humidity + '%'}></InfoCard>
          <InfoCard title={'Temp. Max'} value={temperatureMax + '°'}></InfoCard>
          <InfoCard title={'Temp. Min'} value={temperatureMin + '°'}></InfoCard>
        </View>
      </View>

      <View style={styles.themeButton}>
        <View style={styles.squareButton}>
          <TouchableOpacity style={styles.circleButton} onPress={() => darkTheme ? setDarkTheme(false) : setDarkTheme(true)}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
