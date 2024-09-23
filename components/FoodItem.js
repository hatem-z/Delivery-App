import { View, Text, Pressable } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Menultem from "./Menultem";

const FoodItem = ({ item }) => {
  const data = [item];
  return (
    <View>
      {data?.map((item, index) => (
        <>
          <Pressable
            style={{
              margin: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            key={index}>
            <Text
              style={{
                fontSize: 29,
                fontWeight: "bold",
              }}>
              {item?.name} ({item?.items?.length})
            </Text>
            <AntDesign name="down" size={20} color="black" />
          </Pressable>

          {item?.items?.map((item, index) => (
            <Menultem key={index} item={item} />
          ))}
        </>
      ))}
    </View>
  );
};

export default FoodItem;
