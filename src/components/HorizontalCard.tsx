import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES, ICONS} from '../resources';

const HorizontalCard = ({item, onPress}: any) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => onPress(item)}>
      <Image
        source={{uri: item.thumbnail}}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        <View style={styles.ratingRow}>
          {[1, 2, 3, 4, 5].map((star, index) => (
            <Image
              key={index}
              source={ICONS.STAR_ICON}
              style={[
                styles.star,
                {
                  tintColor:
                    star <= Math.round(item.rating)
                      ? COLORS.filledStar
                      : COLORS.unfilledStar,
                },
              ]}
            />
          ))}
        </View>

        <Text style={styles.price}>₱ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCard;
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius * 1.5,
    padding: SIZES.padding,
    marginBottom: SIZES.padding,
    alignItems: 'center',
  },

  image: {
    width: SIZES.width * 0.35,
    height: SIZES.width * 0.25,
  },

  content: {
    flex: 1,
    marginLeft: SIZES.width * 0.04,
  },

  title: {
    ...FONTS.h3,
    fontWeight: 'bold',
    color: COLORS.black2,
    marginBottom: 6,
  },

  ratingRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },

  star: {
    width: SIZES.width * 0.04,
    height: SIZES.width * 0.04,
    marginRight: 10,
  },

  price: {
    ...FONTS.h3,
    color: COLORS.gray,
  },
});
