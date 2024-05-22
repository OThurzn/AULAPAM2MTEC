import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Tela2({navigation})
  {
    return(
        <View style={styles.container}>
        <Text>Tela 2</Text>
        <Button
          title="ir para Tela 3"
          onPress={() => navigation.navigate("Tela3")}
          ></Button>
      </View>
    )
  }







const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f263f7',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });