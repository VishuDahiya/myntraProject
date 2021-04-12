import Carousel from "react-native-snap-carousel";
import React, { Component } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

const sliderWidth = Dimensions.get("window").width + 0;
const itemWidth = Math.round(sliderWidth * 0.995);
export default class MyCarousel extends Component {
  state = {
    entries: [
      {
        imgUrl: require("../../assets/image/carousel6.jpg"),
      },
      {
        imgUrl: require("../../assets/image/carousel1.jpg"),
      },
      {
        imgUrl: require("../../assets/image/carousel2.jpg"),
      },
      {
        imgUrl: require("../../assets/image/carousel3.jpg"),
      },
      {
        imgUrl: require("../../assets/image/carousel4.jpg"),
      },
      {
        imgUrl: require("../../assets/image/carousel5.jpg"),
      },
      {
        imgUrl: require("../../assets/image/carousel6.jpg"),
      },
    ],
  };

  _renderItem = ({ item, index }) => {
    return (
      <View style={style.slide}>
        <Image
          source={item.imgUrl}
          style={{ width: 418, height: 230, borderRadius: 5 }}
        />
      </View>
    );
  };

  render() {
    return (
      <Carousel
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    );
  }
}

const style = StyleSheet.create({
  slide: {},
  title: {},
});
