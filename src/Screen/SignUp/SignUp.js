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
export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      email: "",
      phone: "",
    };
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 25 }}>
        <ImageBackground
          source={imagePath.backgroundImage}
          style={{ width: "100%", height: "100%", backgroundColor: "red" }}
          blurRadius={0.7}
        >
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.2)" }}>
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
                  marginTop: 0,
                  fontSize: 20,
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                }}
              >
                Myntra
              </Text>
            </View>
            <View style={{ marginBottom: 42, alignItems: "center" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "sans-serif",
                  fontSize: 28.5,
                  marginLeft: 12,
                }}
              >
                Sign up to get a personalized
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  fontSize: 28.5,
                  marginLeft: 10,
                }}
              >
                experience & quick
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  fontSize: 28.5,
                  marginLeft: 10,
                }}
              >
                checkout
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 0,
              }}
            >
              <TextInput
                underlineColorAndroid="transparent"
                placeholderTextColor="black"
                placeholder="Full Name"
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
                placeholder="Enter Email Address"
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
                placeholder="Enter Mobile Number"
                keyboardType="numeric"
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
                    marginBottom: 55,
                    fontFamily: "sans-serif",
                  }}
                >
                  Sign up
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
                  Already have an Account?
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "#ff3f6c",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                    onPress={() => this.props.navigation.navigate("Login")}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
