import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaViewBase,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import imagePath from "../../constant/imagePath";
imagePath;

export default class Categories extends Component {
  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            marginBottom: 10,
            borderColor: "black",
          }}
        >
          <TouchableOpacity>
            <Image
              source={imagePath.menu}
              style={{
                height: 25,
                width: 25,
                marginLeft: 7,
                marginRight: 8,
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={imagePath.myntraLogo}
              style={{ height: 45, width: 45, marginRight: 150 }}
            />
          </TouchableOpacity>
          <View style={{ marginTop: 9, flexDirection: "row" }}>
            <TouchableOpacity>
              <Image
                source={imagePath.search}
                style={{ height: 25, width: 25, marginRight: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={imagePath.notification}
                style={{ height: 25, width: 25, marginRight: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={imagePath.wishlist}
                style={{ height: 25, width: 25, marginRight: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={imagePath.cart}
                style={{ height: 25, width: 25, marginRight: 10 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: -28,
                fontSize: 12,
                marginTop: 8,
                color: "#ff3f6c",
              }}
            >
              0
            </Text>
          </View>
        </View>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Text>Categories</Text>
        </View>
      </SafeAreaView>
    );
  }
}
