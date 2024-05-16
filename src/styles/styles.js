import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        paddingHorizontal: 10,
        color: '#fff',
        borderRadius: 8,
        marginRight: 10,
    },
    button: {
        height: 40,
        backgroundColor: '#555',
        color: '#FFF',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginLeft: 10,
    },
    loader: {
        marginTop: 20,
    },
    weatherContainer: {
        alignItems: 'center',
    },
    city: {
        fontSize: 24,
        marginBottom: 10,
        color: '#fff',
    },
    description: {
        fontSize: 18,
        color: '#fff',
    },
    errorMsg: {
        fontSize: 18,
        color: '#fff',
        marginTop: 20,
    },
    weatherInfoContainer: {
        width: '100%',
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
      },
      weatherInfoContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      cityName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
      },
      weatherDetails: {
        flexDirection: 'row',
      },
      temperature: {
        marginRight: 10,
        fontWeight: 'bold',
        color: '#333',
      },
      wind: {
        color: '#333',
        marginRight: 10, // Adicionando margem direita para separar o rótulo do detalhe
        fontWeight: 'bold',
        marginLeft: 10,
      },
      weatherDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5, // Adicionando margem inferior para separar cada detalhe
      },
      weatherLabel: {
        color: '#fff',
        marginRight: 10, // Adicionando margem direita para separar o rótulo do detalhe
        fontWeight: 'bold',
      },
      degreeSymbol: {
        fontSize: 12, // Tamanho menor para o símbolo de grau Celsius
      },
});
