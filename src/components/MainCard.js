
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

const MainCard = (props) => {

    const styles = StyleSheet.create({
        card:{
            backgroundColor: '#393e46',
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
        }
      });
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{props.title}</Text>
            <Feather name="sun" style={{marginTop: 55}} size={40} color="orange" />
            <Text style={styles.temperatureText}>27℃</Text>
        </View>
    );
}

export default MainCard;