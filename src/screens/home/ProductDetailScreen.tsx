import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, SIZES, ICONS} from '../../resources';

import {useRoute} from '@react-navigation/native';
import {Product} from '../../networkLayer/Model';

const ProductDetailScreen = ({navigation}: any) => {
  const [quantity, setQuantity] = useState(1);
  const [activeDot, setActiveDot] = useState(0);
  const [product, setProduct] = useState<Product | null>(null);
  const route = useRoute();

  const passedProduct = route?.params?.product;
  console.log('Route Params:', route?.params?.product);

  useEffect(() => {
    if (passedProduct) {
      setProduct(passedProduct);
      console.log('Passed Product:', passedProduct);
    }
  }, [passedProduct]);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image
          source={ICONS.BACK_ICON}
          style={styles.backIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Image
        source={{uri: product?.images?.[0] || product?.thumbnail}}
        style={styles.productImage}
        resizeMode="contain"
      />

      <View style={styles.dotContainer}>
        {[0, 1, 2].map(index => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  activeDot === index ? COLORS.primary : COLORS.gray,
              },
            ]}
          />
        ))}
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.title} numberOfLines={1}>
              {product?.title || 'Product Name'}
            </Text>
            <Text style={styles.subTitle}>{product?.category}</Text>
          </View>

          <View>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.price}>₱ {product?.price}</Text>
          </View>
        </View>

        <View style={styles.quantityRow}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.qtyNumber}>{quantity}</Text>

          <TouchableOpacity
            style={[styles.qtyBtn, {backgroundColor: COLORS.gray}]}
            onPress={() => setQuantity(quantity + 1)}>
            <Text style={[styles.qtyText, {color: COLORS.white}]}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>{product?.description}</Text>

        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.cartButton}>
            <Image
              source={ICONS.FILLED_BAG}
              style={styles.cartIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Cyan,
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },

  backIcon: {
    width: 24,
    height: 24,
  },

  productImage: {
    width: '100%',
    height: SIZES.height * 0.45,
    marginTop: 80,
  },

  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },

  bottomContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: SIZES.padding,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20,
    gap: 20,
  },

  title: {
    ...FONTS.body2,
    color: COLORS.heading,
  },

  subTitle: {
    ...FONTS.body4,
    color: COLORS.gray,
    fontWeight: '200',
    textTransform: 'capitalize',
  },

  priceLabel: {
    ...FONTS.body2,
    color: COLORS.gray,
  },

  price: {
    ...FONTS.h2,
    color: COLORS.black,
    fontWeight: 'bold',
  },

  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    gap: 20,
  },

  qtyBtn: {
    width: 45,
    height: 45,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.black,
  },

  qtyNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
  },

  descriptionTitle: {
    ...FONTS.h3,
    marginBottom: 8,
    color: COLORS.black,
    fontWeight: '700',
  },

  description: {
    ...FONTS.body3,
    color: COLORS.black,
    lineHeight: 22,
    fontWeight: '700',
  },

  bottomRow: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },

  cartButton: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  cartIcon: {
    width: 28,
    height: 28,
    tintColor: COLORS.primary,
  },

  buyButton: {
    flex: 1,
    height: 65,
    borderRadius: 20,
    backgroundColor: COLORS.yellow,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buyText: {
    ...FONTS.h2,
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
