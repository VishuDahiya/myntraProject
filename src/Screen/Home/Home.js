import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import MyCarousel from "../../Components/Carousel";
import imagePath from "../../constant/imagePath";
import ShoesCard from "../../Components/ShoesCards";
imagePath;
ShoesCard;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoesList: [
        {
          id: 1,
          image1: require(".././../../assets/image/image6.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 2,
          image1: require(".././../../assets/image/image2.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 3,
          image1: require(".././../../assets/image/image3.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 4,
          image1: require(".././../../assets/image/image4.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 5,
          image1: require(".././../../assets/image/image5.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 6,
          image1: require(".././../../assets/image/image6.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 7,
          image1: require(".././../../assets/image/image7.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 8,
          image1: require(".././../../assets/image/image8.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 9,
          image1: require(".././../../assets/image/image9.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 10,
          image1: require(".././../../assets/image/image10.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 11,
          image1: require(".././../../assets/image/image11.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 12,
          image1: require(".././../../assets/image/image12.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 13,
          image1: require(".././../../assets/image/image13.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 14,
          image1: require(".././../../assets/image/image14.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 15,
          image1: require(".././../../assets/image/image15.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 16,
          image1: require(".././../../assets/image/image16.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 17,
          image1: require(".././../../assets/image/image17.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 18,
          image1: require(".././../../assets/image/image18.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 19,
          image1: require(".././../../assets/image/image19.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
        {
          id: 20,
          image1: require(".././../../assets/image/image20.jpg"),
          name: "Roadster",
          type: "Men Solid Sneakers",
          discountPrice: "₹1920",
          originalPrice: "₹̶3̶4̶9̶9̶",
          offPrice: "45 % OFF",
        },
      ],
      counter: 0,
      cardData: [],
    };
  }

  onPressButton = (value) => {
    let { cardData } = this.state;
    let index = cardData.findIndex((item) => item.id == value.id);
    if (index != -1) {
      cardData[index].num = cardData[index].num + 1;
      this.setState({ cardData: cardData });
    } else {
      value.num = 1;
      let newCardData = (cardData = [...cardData, ...[value]]);
      this.setState({ counter: this.state.counter + 1, cardData: newCardData });
    }
  };

  componentDidMount() {
    this.focusListner = this.props.navigation.addListener("focus", () => {
      if (this.props.route.params && this.props.route.params.add) {
        let { cardData } = this.state;
        let index = cardData.findIndex(
          (item) => item.id == this.props.route.params.add.id
        );
        if (index != -1) {
          cardData[index].num = cardData[index].num + 1;
          this.setState({ cardData: cardData });
        } else {
          this.props.route.params.add.num = 1;
          let newCardData = [...cardData, ...[this.props.route.params.add]];
          this.setState({
            counter: this.state.counter + 1,
            cardData: newCardData,
          });
        }

        this.props.navigation.setParams({ add: undefined });
      }
    });
  }
  componentWillUnmount() {
    if (this.focusListner) {
      this.focusListner();
    }
  }

  render() {
    let { shoesList, counter, cardData } = this.state;
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
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Cart", { data: cardData })
              }
            >
              <Image
                source={imagePath.cart}
                style={{ height: 25, width: 25, marginRight: 10 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 152,
                backgroundColor: "#ff3f6c",
                borderRadius: 90,
                borderWidth: 0.51,
                paddingHorizontal: 4,
                fontSize: 12,
                color: "white",
                position: "absolute",
                marginTop: -4,
              }}
            >
              {counter}
            </Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 10 }}
          >
            <View style={{ flexDirection: "column" }}>
              <Image
                source={imagePath.scrollSale}
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  textAlign: "center",
                  marginTop: 5,
                  fontWeight: "normal",
                  fontFamily: "sans-serif",
                  color: "grey",
                  fontSize: 12,
                  width: 70,
                }}
              >
                OFFERS
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={imagePath.scrollMen}
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  textAlign: "center",
                  marginTop: 5,
                  fontWeight: "normal",
                  color: "grey",
                  fontFamily: "sans-serif",
                  fontSize: 13,
                  width: 70,
                }}
              >
                MEN
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={imagePath.scrollWomen}
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  textAlign: "center",
                  marginTop: 5,
                  fontWeight: "normal",
                  color: "grey",
                  fontFamily: "sans-serif",
                  fontSize: 13,
                  width: 70,
                }}
              >
                WOMEN
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={imagePath.scrollkid}
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  textAlign: "center",
                  marginTop: 5,
                  fontWeight: "normal",
                  color: "grey",
                  fontFamily: "sans-serif",
                  fontSize: 13,
                  width: 70,
                }}
              >
                KIDS
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={imagePath.scrollBeauty}
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 5,
                  textAlign: "center",
                  fontWeight: "normal",
                  color: "grey",
                  fontFamily: "sans-serif",
                  fontSize: 13,
                  width: 70,
                }}
              >
                BEAUTY
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={imagePath.scrollHome}
                style={{
                  height: 70,
                  width: 70,
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  textAlign: "center",
                  marginTop: 5,
                  fontWeight: "normal",
                  color: "grey",
                  fontFamily: "sans-serif",
                  fontSize: 13,
                  width: 70,
                }}
              >
                HOME
              </Text>
            </View>
          </ScrollView>

          <View>
            <MyCarousel />
          </View>

          <View style={{ marginBottom: 85, marginTop: 10 }}>
            {<ShoesCard onAdd={this.onPressButton} shoesList={shoesList} />}
          </View>

          {/* <View  style={{flexDirection:'column',}} >
        {shoesList.map((value) =>{
        return <ShoesCard data={value}/>
        })}
        
    </View> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
