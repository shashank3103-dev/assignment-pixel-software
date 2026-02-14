import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {COLORS, ICONS} from '../../resources';
import CustomButton from '../../components/CustomButton';

const FurnitureIntroScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ImageBackground
        source={ICONS.BACKGROUND_IMAGE}
        style={styles.image}
        resizeMode="cover">
        <SafeAreaView style={styles.overlay}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Feel your personal{'\n'}
              expression by choosing{'\n'}
              the latest design of{'\n'}
              furniture
            </Text>
          </View>

          <CustomButton
            title="Get Started"
            onPress={() => navigation.replace('HomeTabs')}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default FurnitureIntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  image: {
    flex: 1,
    justifyContent: 'space-between',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  textContainer: {
    marginTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: COLORS.black,
    lineHeight: 40,
  },
});
