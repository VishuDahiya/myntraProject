import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import imagePath from "../../constant/imagePath";
imagePath;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 25 }}>
        <ImageBackground
          source={imagePath.backgroundImage}
          style={{ width: "100%", height: 800 }}
          blurRadius={0.7}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: 45,
              marginTop: 18,
              marginLeft: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={imagePath.myntraLogo}
              style={{ height: 80, width: 80 }}
            />
            <Text
              style={{
                marginTop: 5,
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              Myntra
            </Text>
          </View>
          <View style={{ marginBottom: 40, alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize: 30,
                marginLeft: 12,
              }}
            >
              Welcome to India's Largest
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize: 30,
                marginLeft: 10,
              }}
            >
              Online Fashion Store
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View>
              <TextInput
                placeholderTextColor="black"
                underlineColorAndroid="transparent"
                placeholder="Enter Mobile or Email"
                autoCapitalize="none"
                autoCorrect={false}
                style={{
                  borderBottomWidth: 1,
                  width: 200,
                  height: 50,
                  fontSize: 20,
                  borderRadius: 5,
                  alignItems: "center",
                  borderColor: "black",
                }}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholderTextColor="black"
                placeholder="Enter Password"
                secureTextEntry={true}
                style={{
                  borderBottomWidth: 1,
                  borderColor: "black",
                  width: 200,
                  padding: 10,
                  height: 50,
                  fontSize: 20,
                  borderRadius: 5,
                  alignItems: "center",
                  marginTop: 5,
                  marginLeft: -9,
                  borderColor: "black",
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text
                style={{
                  borderWidth: 0.01,
                  borderRadius: 5,
                  borderColor: "#ff3f6c",
                  width: 150,
                  height: 36,
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#ff3f6c",
                  color: "white",
                  fontSize: 20,
                  marginTop: 30,
                  marginBottom: 60,
                  fontFamily: "sans-serif",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginBottom: 16 }}>
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: 1,
                  borderRadius: 10,
                  width: 135,
                  height: 43,
                  padding: 5,
                  marginRight: 50,
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={imagePath.facebook}
                    style={{ height: 46, width: 35, marginTop: -7 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      width: 150,
                      height: 40,
                      justifyContent: "center",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 20,
                      marginBottom: 12,
                      marginLeft: -30,
                      marginRight: 50,
                      marginTop: 2,
                      fontFamily: "sans-serif",
                    }}
                  >
                    Facebook
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: 1,
                  borderRadius: 10,
                  width: 120,
                  height: 43,
                  padding: 5,
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={imagePath.google}
                    style={{
                      height: 25,
                      width: 30,
                      marginLeft: 2,
                      marginTop: 3,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      width: 150,
                      height: 40,
                      justifyContent: "center",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 20,
                      marginBottom: 12,
                      marginLeft: -38,
                      marginRight: 50,
                      marginTop: 2,
                      fontFamily: "sans-serif",
                    }}
                  >
                    Google
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginRight: 8,
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Didn't have an Account?
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#ff3f6c",
                    fontWeight: "bold",
                    fontSize: 20,
                    fontFamily: "sans-serif",
                  }}
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
