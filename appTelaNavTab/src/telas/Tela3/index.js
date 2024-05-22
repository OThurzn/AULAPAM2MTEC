import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Tela3({navigation})
  {
    return(
      <View style={styles.container}>
        <Text>Tela 3</Text>
        <Button
          title="ir para Tela principal"
          onPress={() => navigation.navigate("Principal")}
          ></Button>
      </View>
    )
  }







const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5bf',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });