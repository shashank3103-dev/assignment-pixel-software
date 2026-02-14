import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS, ICONS, SIZES} from '../../resources';
import URLManager from '../../networkLayer/URLManager';
import VerticalCard from '../../components/VerticalCard';
import HorizontalCard from '../../components/HorizontalCard';

const HomeScreen = ({navigation}: any) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isGrid, setIsGrid] = useState(true);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    fetchAllProducts();
  }, []);

  async function fetchAllProducts() {
    try {
      setLoading(true);
      let urlManager = new URLManager();
      return urlManager
        .getAllProducts()
        .then(res => {
          return res.json() as Promise<any>;
        })
        .then(async (data: any) => {
          setProducts(data.data.products);
        })
        .catch(e => {
          Alert.alert(e.name, e.message);
          return e.response;
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (er) {
      console.log(er);
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); 

    return () => clearTimeout(timer);
  }, [search]);
 const filteredProducts = products.filter((item: any) =>
   item?.title?.toLowerCase().includes(debouncedSearch.toLowerCase()),
 );
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...FONTS.h2,
          color: COLORS.heading,
          marginBottom: SIZES.padding,
          fontWeight: 'bold',
        }}>
        Explore {filteredProducts.length} Products
      </Text>

      <View style={styles.searchContainer}>
        <TextInput
          placeholderTextColor={COLORS.gray}
          style={styles.searchInput}
          value={search}
          onChangeText={text => setSearch(text)}
        />
        <Image
          source={ICONS.SEARCH_ICON}
          resizeMode="contain"
          style={{
            width: SIZES.width * 0.05,
            height: SIZES.width * 0.05,
            tintColor: COLORS.black, // remove if icon already colored
            marginRight: SIZES.width * 0.03,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginBottom: SIZES.padding,
        }}>
        <TouchableOpacity
          style={{
            marginLeft: 15,
          }}
          onPress={() => setIsGrid(true)}>
          <Image
            source={ICONS.FILTER} // change to your asset name
            resizeMode="contain"
            style={[
              styles.toggleIcon,
              {tintColor: isGrid ? COLORS.secondary : COLORS.black},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 15,
          }}
          onPress={() => setIsGrid(false)}>
          <Image
            source={ICONS.CATEGORY}
            resizeMode="contain"
            style={[
              styles.toggleIcon,
              {tintColor: isGrid ? COLORS.black : COLORS.secondary},
            ]}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        key={isGrid ? 'grid' : 'list'}
        data={filteredProducts}
        numColumns={isGrid ? 2 : 1}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => (
          <Text style={{textAlign: 'center', marginTop: 20}}>
            No products found
          </Text>
        )}
        renderItem={({item}) =>
          isGrid ? (
            <VerticalCard
              item={item}
              onPress={(product: any) =>
                navigation.navigate('ProductDetail', {product})
              }
            />
          ) : (
            <HorizontalCard
              item={item}
              onPress={(product: any) =>
                navigation.navigate('ProductDetail', {product})
              }
            />
          )
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Cyan,
    paddingHorizontal: SIZES.padding,
    paddingTop: 50,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.width * 0.03,
    height: SIZES.height * 0.06,
    marginBottom: SIZES.padding,
  },

  searchInput: {
    flex: 1,
    ...FONTS.body3,
    color: COLORS.black,
  },

  listContent: {
    paddingBottom: 120,
  },
  toggleIcon: {
    width: SIZES.width * 0.06,
    height: SIZES.width * 0.06,
  },
});
