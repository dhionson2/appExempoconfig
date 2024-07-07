import React, { useEffect } from 'react';
import { SafeAreaView, View, Button, Alert, StyleSheet, ViewStyle } from 'react-native';
import firebase from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';

const App = () => {
  useEffect(() => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp();
    }
    console.log('Firebase configurado com sucesso:', firebase.app().name);
  }, []);

  const showAlert = () => {
    Alert.alert('Bem-vindo Firebase');
  };

  const logEvent = async () => {
    await analytics().logEvent('button_click', {
      description: 'Button clicked to show alert',
    });
    console.log('Evento button_click registrado no Google Analytics');
  };

  const userPropert = async () => {
    await analytics().setUserProperty('interested_in', 'Honda Civic');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Clique aqui"
          color="#4CAF50"
          onPress={() => {
            showAlert();
            logEvent();
            userPropert();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  buttonContainer: {
    margin: 10,
  } as ViewStyle,
});

export default App;
