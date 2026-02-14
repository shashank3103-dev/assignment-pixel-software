import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import theme from '../resources/Theme';
import {ICONS} from '../resources';

const {COLORS, SIZES, FONTS, SHADOW} = theme;

const VerticalCard = ({item,onPress}: any) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => onPress(item)}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={ICONS.STAR_ICON}
            resizeMode="contain"
            style={{
              width: SIZES.width * 0.035,
              height: SIZES.width * 0.035,
              marginRight: 5,
            }}
          />
          <Text
            style={{
              ...FONTS.body5,
              color: COLORS.black,
              fontWeight: 'bold',
              marginStart: 5,
            }}>
            {item?.rating}
          </Text>
        </View>
        <Image
          source={ICONS.WISHLIST_ICON}
          resizeMode="contain"
          style={{
            width: SIZES.width * 0.035,
            height: SIZES.width * 0.035,
          }}
        />
      </View>

      <Image
        source={{uri: item?.thumbnail}}
        style={styles.image}
        resizeMode="contain"
      />

      <Text numberOfLines={1} style={styles.title}>
        {item?.title}
      </Text>

      <View style={styles.priceRow}>
        <Text style={styles.price}>₱ {item?.price}</Text>

        <TouchableOpacity style={styles.addButton}>
          <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.base,
    margin: SIZES.base,
    ...SHADOW,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  rating: {
    ...FONTS.body5,
    color: COLORS.gray,
  },

  heart: {
    fontSize: 16,
    color: COLORS.gray,
  },

  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },

  title: {
    ...FONTS.body4,
    color: COLORS.black,
    marginBottom: 5,
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    ...FONTS.body3,
    color: COLORS.gray,
  },

  addButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
