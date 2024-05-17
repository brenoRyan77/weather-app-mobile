
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const MainCard = (props) => {

    const Icon = () => {
        if(props.icon === 'morning'){
            return <Feather name="sun" style={styles.cardIcon} size={40} color="white" />
        }
        if(props.icon === 'afternoon'){
            return <Fontisto name="day-cloudy" style={styles.cardIcon} size={40} color="white" />
        }
        if(props.icon === 'night'){
            return <Fontisto name="night-clear" style={styles.cardIcon} size={40} color="white" />
        }
    }

    const styles = StyleSheet.create({
        card:{
            backgroundColor: props.backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            margin: 10,
            width: 110,
            height: 210,
        },
        temperature: {
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 10,
        },
        refreshButton: {
          position: 'absolute',
          margin: 30,
          alignSelf: 'flex-start',
        },
        text: {
            color: 'white',
            fontSize: 20,
            margin: 15,
        },
        cardIcon: {
            color: 'white',
            margin: 15,
        },
      });
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{props.title}</Text>
            <Icon />
            <Text style={styles.text}>{props.temperature}°</Text>
        </View>
    );
}

export default MainCard;