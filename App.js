import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import axios from "axios";
import Weather from "./Weather";

const APIKEY = "b8cf221bb99b606d0602faa8b4b9948b";

export default class App extends React.Component {
  state = {
    isLoading: true
  };

  // "api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=Apikey"
  getWeather = async (longitude, latitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${APIKEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  };
  getLocation = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status === "granted") {
        const {
          coords: { longitude, latitude }
        } = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true
        });
        this.getWeather(longitude, latitude);

        Alert.alert("welcom", "enjoy");
      } else {
        Alert.alert("Permission does not granted", "so sad");
      }
    } catch (error) {
      Alert.alert("error", "not permission");
    }
  };
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
