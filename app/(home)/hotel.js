import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Animated,
  Image,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter, useLocalSearchParams } from "expo-router";
import FoodItem from "../../components/FoodItem";
import { useSelector } from "react-redux";
import Modal from "react-native-modal";

const HotelScreen = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cart);
  const menu = [
    {
      id: "20",
      name: "Recommended",
      items: [
        {
          id: "101",
          name: "Paneer 65",
          price: 275,
          description:
            "This is served with Raita and gravy and has loaded with chilli paste mixed chicken Kebabs",
          rating: 4.1,
          ratings: 43,
          image:
            "https://i0.wp.com/marudhuskitchen.com/wp-content/uploads/2021/09/paneer-65.jpeg?w=600&ssl=1",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },
        {
          id: "102",
          name: "Chilly Chicken (Boneless)",
          price: 285,
          description:
            "E: 604.42 KCal (163.36 KCal), C: 29.67 Grams (8.02 Grams), P: 50.63 Grams (13.68 Grams), F: 30.94 Grams (8.36 Grams)",
          rating: 4.3,
          ratings: 34,
          image:
            "https://www.yummytummyaarthi.com/wp-content/uploads/2023/03/chilli-chicken-dry-1.jpeg",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
        {
          id: "103",
          name: "Spl Veg Biryani",
          price: 250,
          description:
            "E: 1327.35 KCal (126.41 KCal), C: 213.24 Grams (20.31 Grams), P: 26.99 Grams (2.57 Grams), F: 38.46 Grams (3.66 Grams)",
          rating: 4.5,
          ratings: 56,
          image:
            "https://paattiskitchen.com/wp-content/uploads/2023/02/kmc_20230226_002317-1024x576.jpg",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },
        {
          id: "104",
          name: "Chilly Paneer",
          price: 220,
          description:
            "E: 871.69 KCal (272.40 KCal), C: 21.54 Grams (6.73 Grams), P: 51.90 Grams (16.22 Grams), F: 64.36 Grams (20.11 Grams",
          rating: 3.8,
          ratings: 22,
          image:
            "https://www.yummytummyaarthi.com/wp-content/uploads/2023/06/chilli-paneer-1.jpeg",
          veg: true,
          bestSeller: true,
          quantity: 1,
        },
        {
          id: "105",
          name: "Chicken 65",
          price: 300,
          description:
            "E: 544.39 KCal (155.54 KCal), C: 25.11 Grams (7.17 Grams), P: 45.15 Grams (12.90 Grams), F: 27.91 Grams (7.97 Grams)",
          rating: 4.5,
          ratings: 45,
          image:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_Z4hvjJ-QRI7Gs8Xgk8bpsqaeAXpk76l0ie_pzHbS_GuOLOlW6BAGx6d7_T6WbNBtdZeUvcb2hGQwtua2RnPcEVg5vBDACvTRiQ-d4yaszJJ1sjrXHV1KfNN-wzW8XF5WJvObCVyICsU/w671-h532/chicken+65+10.JPG",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
      ],
    },
    {
      id: "11",
      name: "Rice",
      items: [
        {
          id: "201",
          name: "Chicken Fried Rice",
          price: 260,
          description:
            "E: 1142.26 KCal (163.18 KCal), C: 125.05 Grams (17.86 Grams), P: 40.11 Grams (5.73 Grams), F: 51.37 Grams (7.34 Grams)",
          rating: 4.3,
          ratings: 34,
          image:
            "https://nishkitchen.com/wp-content/uploads/2015/11/Indo-Chinese-Chicken-Fried-Rice-2B.jpg",
          veg: false,
          bestSeller: true,
        },
        {
          id: "202",
          name: "Egg Fried Rice",
          price: 220,
          description:
            "E: 1729.51 KCal (164.72 KCal), C: 204.54 Grams (19.48 Grams), P: 44.03 Grams (4.19 Grams), F: 79.02 Grams (7.53 Grams)",
          rating: 4.3,
          ratings: 52,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVBITrOhyoP7fWQnSsW8v3thLwDwFF3UIFw&s",
          veg: false,
          bestSeller: false,
        },
        {
          id: "203",
          name: "Veg Fried Rice",
          price: 190,
          description:
            "E: 1477.00 KCal (140.67 KCal), C: 204.14 Grams (19.44 Grams), P: 22.90 Grams (2.18 Grams), F: 59.95 Grams (5.71 Grams)",
          rating: 4.6,
          ratings: 56,
          image:
            "https://www.pavaniskitchen.com/wp-content/uploads/2022/05/fried-rice-1024x1536.jpg",
          veg: true,
          bestSeller: true,
        },
        {
          id: "204",
          name: "Jeera Rice",
          price: 195,
          description:
            "E: 1832.30 KCal (174.50 KCal), C: 246.73 Grams (23.50 Grams), P: 27.51 Grams (2.62 Grams), F: 78.15 Grams (7.44 Grams)",
          rating: 4.5,
          ratings: 48,
          image:
            "https://slurrp.club/wp-content/uploads/2021/04/DSC_0429-2-750x500.jpg",
          veg: true,
          bestSeller: false,
        },
      ],
    },
  ];

  const ScrollViewRef = useRef(null);
  const scrollViewRef = useRef(null);
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const ITEM_HEIGHT = 1280;

  const scrollToCategory = (index) => {
    const yOffset = index * ITEM_HEIGHT;
    Animated.timing(scrollAnim, {
      toValue: yOffset,
      duration: 500,
      useNativeDriver: true,
    }).start();
    if (ScrollViewRef.current) {
      ScrollViewRef.current.scrollTo({ y: yOffset, animated: true });
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const recievedMenu = params?.menu ? JSON.parse(params?.menu) : menu;

  return (
    <>
      <ScrollView ref={ScrollViewRef} style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            onPress={() => router.back()}
            style={styles.icon}
            name="arrow-back"
            size={24}
            color="black"
          />
          <View style={styles.iconContainer}>
            <Feather name="camera" size={24} color="black" />
            <FontAwesome5 name="bookmark" size={24} color="black" />
            <MaterialCommunityIcons
              name="share-outline"
              size={24}
              color="black"
            />
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>{params?.name}</Text>
          <Text style={styles.detailsText}>
            Middle Morocco • Fast Food • 160 for one
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
              marginTop: 10,
            }}>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>{params?.aggregate_rating}</Text>
              <Entypo name="star" size={15} color="white" />
            </View>
            <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 5 }}>
              3.2k Ratings
            </Text>
          </View>
          <View style={styles.info}>
            <Text>30 - 40 mins • 6km | Agadir</Text>
          </View>
        </View>

        {menu?.map((item, index) => (
          <FoodItem key={index} item={item} />
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
        }}>
        {menu?.map((item, index) => (
          <Pressable
            onPress={() => scrollToCategory(index)}
            style={{
              paddingHorizontal: 7,
              borderRadius: 4,
              paddingVertical: 5,
              marginVertical: 10,
              marginHorizontal: 10,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#181818",
              borderWidth: 1,
            }}>
            <Text>{item?.name}</Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: 25,
          bottom: cart?.length > 0 ? 70 : 35,
          backgroundColor: "black",
        }}>
        <Ionicons
          style={{ textAlign: "center" }}
          name="fast-food-outline"
          size={24}
          color="white"
        />
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "500",
            fontSize: 11,
            marginTop: 3,
          }}>
          MENU
        </Text>
      </Pressable>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}>
        <View
          style={{
            height: 190,
            width: 250,
            backgroundColor: "black",
            position: "absolute",
            bottom: 35,
            right: 10,
            borderRadius: 7,
          }}>
          {menu?.map((item, index) => (
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <Text
                style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 17 }}>
                {item?.name}
              </Text>
              <Text
                style={{ color: "#D0D0D0", fontWeight: "600", fontSize: 17 }}>
                {item?.items?.length}
              </Text>
            </View>
          ))}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{
                uri: "https://thumbs.dreamstime.com/b/food-delivery-bike-icon-isolated-black-background-food-delivery-bike-icon-isolated-black-background-simple-vector-logo-163522315.jpg",
              }}
            />
          </View>
        </View>
      </Modal>

      {cart?.length > 0 && (
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/cart",
              params: {
                name: params.name,
              },
            })
          }
          style={{
            backgroundColor: "#fd5c63",
            paddingHorizontal: 10,
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 15,
              fontWeight: "500",
            }}>
            {cart.length} items added
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              marginTop: 5,
              fontWeight: "600",
            }}>
            Add item(s) worth 240 to reduce surge fee by Rs 35.
          </Text>
        </Pressable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    padding: 5,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    gap: 13,
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  detailsText: {
    marginTop: 5,
    fontSize: 15,
    color: "gray",
    fontWeight: "500",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#006A4E",
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 5,
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    marginRight: 5,
    color: "white",
    fontWeight: "bold",
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0F0C0",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 12,
  },
});

export default HotelScreen;
