import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunder: {
    iconName: "weather-lightning",
    gradient: ["#EECDA3", "#EF629F"],
    title: "날씨가 안좋아 나가지마",
    subTitle: "지금은 상황이 안좋다."
  },
  storm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#16BFFD", "#CB3066"],
    title: "번개가 치고 날씨가 안좋다 나가지마",
    subTitle: "번개가 많이 치는 날씨"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#ff4b1f", "#ff9068"],
    title: "비가오고 흐리네, 나가지마",
    subTitle: "비가오니까 우산챙겨"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#FF5F6D", "#FFC371"],
    title: "폭우다 폭우 !!! 도망가",
    subTitle: "비가 많이 오네, 나가지마"
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#2196f3", "#f44336"],
    title: "눈이 온다 미끄럽겠다. 불쌍.",
    subTitle: "염화칼슘이 뿌려져있길.."
  },
  Atmosphere: {
    iconName: "weather-snowy-rainy",
    gradient: ["#00d2ff", "#928DAB"],
    title: "이건 뭐지 모르겠다.",
    subTitle: "무슨 날씨야 지금은 ?"
  },
  Clear: {
    iconName: "weather-cloudy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "아주아주 화창한 날씨 나가놀아",
    subTitle: "이렇게 좋은날은 몇번 없어"
  },
  Clouds: {
    iconName: "weather-partlycloudy",
    gradient: ["#0B486B", "#F56217"],
    title: "흐리지만 좋은 날씨 나가놀아",
    subTitle: "나가놀자"
  },
  Haze: {
    iconName: "cloud-outline",
    gradient: ["#e96443", "#904e95"],
    title: "날씨도 엄청많네 니미럴",
    subTitle: "서브타이틀 쓰기도 귀찮다"
  },
  Dust: {
    iconName: "weather-sunset",
    gradient: ["#2C3E50", "#4CA1AF"],
    title: "흙흙흙 언제 없어지는거야 중국놈들",
    subTitle: "미세먼지 마스크 착용하시길"
  },
  Smoke: {
    iconName: "weather-sunny",
    gradient: ["#2C3E50", "#FD746C"],
    title: "이것도 미세먼지 하여튼 중국",
    subTitle: "중국은 미세먼지가 많아"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#141E30", "#243B55"],
    title: "스모그 스모그 경고경고경고 !",
    subTitle: "나가지마 집에 있어 방콕"
  },
  Squall: {
    iconName: "weather-hail",
    gradient: ["#42275a", "#734b6d"],
    title: "날씨 진짜 많네, 얼마나 많은거야",
    subTitle: "에휴, 날씨 진짜 많아 어이쿠"
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradient: ["#000428", "#004e92"],
    title: "이런건 미국에만 있는거야 한국은 없어",
    subTitle: "안심하고 놀아ㅋㅋㅋ"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>
          {temp}
          <MaterialCommunityIcons
            size={25}
            name="temperature-celsius"
            color="white"
          />
        </Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>
          {weatherOptions[condition].subTitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunder",
    "storm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Dust",
    "Smoke",
    "Fog",
    "Squall",
    "Tornado"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 32,
    color: "white"
  },
  halfContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { color: "white", fontSize: 40, fontWeight: "300", marginBottom: 10 },
  subTitle: { color: "white", fontSize: 30, fontWeight: "600" },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
