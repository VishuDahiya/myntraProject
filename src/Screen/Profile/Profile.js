import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Share,
  Button,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import imagePath from "../../constant/imagePath";
import Communications from "react-native-communications";
import openMap from "react-native-open-maps";

export default class Profile extends Component {
  state = {
    selectedImage:
      "data:image/png;base64,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",
  };

  selectImage = () => {
    Alert.alert(
      "Profile Image",
      "Select appropriate Image for your Profile",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Gallery",
          onPress: this.getImageUsingGallery,
        },
        {
          text: "Camera",
          onPress: this.getImageUsingCamera,
        },
      ],
      { cancelable: false }
    );
  };

  getImageUsingCamera = async () => {
    let picker = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (picker.cancelled === true) {
      return;
    }
    this.setState({
      selectedImage: picker.uri,
    });
  };

  getImageUsingGallery = async () => {
    let picker = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (picker.cancelled === true) {
      return;
    }
    this.setState({
      selectedImage: picker.uri,
    });
  };

  onShare = async () => {
    try {
      const result = await Share.share({
        message: "order Id: 86435",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // open geo location
  _toRohtak() {
    openMap({ latitude: 28.8955, longitude: 76.6066 });
  }

  render() {
    return (
      <>
        <View
          style={{
            backgroundColor: "white",
            marginBottom: 2,
            paddingBottom: 8,
          }}
        >
          <View style={{ marginLeft: 15, marginTop: 40, flexDirection: "row" }}>
            <View>
              <TouchableOpacity style={{ alignItems: "center", marginTop: 10 }}>
                <Image
                  source={{ uri: this.state.selectedImage }}
                  style={styles.accountImage}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.selectImage}
                style={{ alignItems: "center", marginTop: 10 }}
              >
                <Text style={styles.textsize}>Add Image</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 10, marginTop: 36, marginLeft: 18 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>User</Text>
              <View style={{ flexDirection: "row", marginTop: 12 }}>
                <Text
                  style={{
                    marginRight: 14,
                    fontSize: 12,
                    padding: 3,
                    paddingHorizontal: 5,
                    color: "grey",
                    borderWidth: 1,
                    borderRadius: 40,
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  INSIDER
                </Text>
                <Text style={{ fontSize: 15, color: "grey" }}>
                  98 Insider Points
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.summary,
              {
                height: 100,
                backgroundColor: "white",
                marginVertical: 5,
                alignItems: "center",
              },
            ]}
          >
            <TouchableOpacity
              onPress={() =>
                Communications.email(
                  ["myntrahelp@gmail.com"],
                  null,
                  null,
                  "Provide order id"
                )
              }
            >
              <View style={styles.summaryContainer}>
                <Image
                  source={imagePath.emailButton}
                  style={[
                    styles.summaryImage,
                    {
                      resizeMode: "cover",
                      width: "100%",
                      height: "59%",
                      marginTop: 8,
                    },
                  ]}
                />
                <Text style={{ fontWeight: "bold" }}>Email Us</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Communications.phonecall("+919779967444", true)}
            >
              <View style={styles.summaryContainer}>
                <Image
                  source={imagePath.phoneButton}
                  style={[
                    styles.summaryImage,
                    {
                      resizeMode: "cover",
                      width: "100%",
                      height: "60%",
                      marginTop: 7,
                    },
                  ]}
                />
                <Text style={{ fontWeight: "bold" }}>Call Us</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onShare}>
              <View style={styles.summaryContainer}>
                <Image
                  source={imagePath.shareButton}
                  style={[
                    styles.summaryImage,
                    {
                      resizeMode: "cover",
                      width: "100%",
                      height: "52%",
                      marginTop: 12,
                    },
                  ]}
                />
                <Text style={{ fontWeight: "bold" }}>Share</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._toRohtak}>
              <View style={styles.summaryContainer}>
                <Image
                  source={imagePath.trackButton}
                  style={[
                    styles.summaryImage,
                    {
                      resizeMode: "cover",
                      width: "100%",
                      height: "55%",
                      marginTop: 12,
                    },
                  ]}
                />
                <Text style={{ fontWeight: "bold" }}>Track</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 5, backgroundColor: "white" }}>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <Image
              source={imagePath.boxButton}
              style={{
                height: 50,
                width: 50,
                marginRight: 10,
                marginLeft: 10,
                marginTop: 7,
              }}
            />
            <View style={{ flexDirection: "column", marginTop: 9 }}>
              <Text style={{ fontSize: 18 }}>Orders</Text>
              <Text style={{ fontSize: 15, color: "grey" }}>
                Check your order status
              </Text>
            </View>
            <Image
              source={imagePath.rightButton}
              style={{
                marginRight: 20,
                marginLeft: 154,
                marginTop: 25,
                height: 15,
                width: 15,
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 5, backgroundColor: "white" }}>
          <View
            style={{
              flexDirection: "row",
              marginLeft: "auto",
              marginRight: 20,
              marginBottom: 8,
            }}
          >
            <Image
              source={imagePath.helpButton}
              style={{
                height: 50,
                width: 50,
                marginRight: 10,
                marginLeft: 8,
                marginTop: 5,
              }}
            />
            <View style={{ flexDirection: "column", marginTop: 9 }}>
              <Text style={{ fontSize: 18 }}>Help Center</Text>
              <Text style={{ fontSize: 15, color: "grey" }}>
                Help regarding your recent purchases
              </Text>
            </View>
            <Image
              source={imagePath.rightButton}
              style={{
                marginLeft: 62,
                marginRight: 20,
                marginTop: 25,
                height: 15,
                width: 15,
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 5, backgroundColor: "white" }}>
          <View style={{ flexDirection: "row", marginBottom: -1 }}>
            <Image
              source={imagePath.kingButton}
              style={{
                height: 60,
                width: 50,
                marginRight: 10,
                marginLeft: 8,
                marginTop: 6,
              }}
            />
            <View style={{ flexDirection: "column", marginTop: 10 }}>
              <Text style={{ fontSize: 18 }}>Myntra Insider</Text>
              <Text style={{ fontSize: 15, color: "grey" }}>
                Perks, Privileges, Pride
              </Text>
            </View>
            <Image
              source={imagePath.rightButton}
              style={{
                marginRight: 20,
                marginLeft: 160,
                marginTop: 25,
                height: 15,
                width: 15,
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 5, backgroundColor: "white" }}>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <Image
              source={imagePath.legButton}
              style={{ height: 50, width: 50, marginRight: 10, marginLeft: 10 }}
            />
            <View style={{ flexDirection: "column", marginTop: 9 }}>
              <Text style={{ fontSize: 18 }}>Myntra Move</Text>
              <Text style={{ fontSize: 15, color: "grey" }}>
                Get reward to stay fit
              </Text>
            </View>
            <Image
              source={imagePath.rightButton}
              style={{
                marginRight: 20,
                marginLeft: 170,
                marginTop: 25,
                height: 15,
                width: 15,
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 5, backgroundColor: "white" }}>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <Image
              source={imagePath.wishlist}
              style={{ height: 50, width: 50, marginRight: 10, marginLeft: 10 }}
            />
            <View style={{ flexDirection: "column", marginTop: 9 }}>
              <Text style={{ fontSize: 18 }}>Wishlist</Text>
              <Text style={{ fontSize: 15, color: "grey" }}>
                Your most loved styles
              </Text>
            </View>
            <Image
              source={imagePath.rightButton}
              style={{
                marginRight: 20,
                marginLeft: 158,
                marginTop: 25,
                height: 15,
                width: 15,
              }}
            />
          </View>
        </View>

        <View style={{ marginTop: 15, backgroundColor: "white", padding: 5 }}>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 16, marginBottom: 8, color: "grey" }}>
              FAQs
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 8, color: "grey" }}>
              ABOUT US
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 8, color: "grey" }}>
              TERMS OF USE
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 8, color: "grey" }}>
              PRIVACY POLICY
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <Text
            style={{
              color: "#ff3f6c",
              borderWidth: 1,
              textAlign: "center",
              padding: 10,
              borderColor: "#ff3f6c",
              marginHorizontal: 20,
              marginTop: 20,
            }}
          >
            LOG OUT
          </Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center", marginTop: 30 }}>
          APP VERSION 4.2584.5
        </Text>
      </>
    );
  }
}

// Account stylesheet
const styles = StyleSheet.create({
  accountText: {
    marginTop: 60,
    textAlign: "center",
    fontSize: 30,
  },
  summary: {
    padding: 15,
    height: 55,
    marginBottom: -10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "whitesmoke",
    borderBottomWidth: 1,
    paddingBottom: 0,
    borderRadius: 5,
  },
  summaryContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  summaryImage: {
    height: "50%",
    width: "50%",
  },
  accountImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  textsize: {
    fontSize: 10,
    borderWidth: 0.2,
    padding: 3,
    width: 70,
    textAlign: "center",
    backgroundColor: "#ff3f6c",
    borderRadius: 10,
    color: "white",
  },
});
