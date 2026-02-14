import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../resources/Theme';

const DeepLinkTestScreen = ({navigation, route}: any) => {
  useEffect(() => {
    Alert.alert(
      'Deep Link Success!',
      'App opened from:\nhttps://io.pixelsoftwares.com/test.txt',
      [
        {
          text: 'OK',
          style: 'default',
        },
      ],
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>🔗</Text>
        <Text style={styles.title}>Deep Link Works!</Text>
        <Text style={styles.subtitle}>
          Successfully opened from:{'\n'}
          <Text style={styles.link}>
            https://io.pixelsoftwares.com/test.txt
          </Text>
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeTabs' }],
    })
  }>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.goBack()}>
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.Cyan,
    padding: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '100%',
  },
  emoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  title: {
    ...FONTS.h2,
    color: COLORS.heading,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    ...FONTS.body3,
    color: COLORS.gray,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  link: {
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    ...FONTS.h3,
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.secondary,
  },
  secondaryButtonText: {
    color: COLORS.secondary,
  },
});

export default DeepLinkTestScreen;
