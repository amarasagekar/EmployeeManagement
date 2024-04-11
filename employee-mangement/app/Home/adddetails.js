import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React from "react";

const adddetails = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "White" }}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Add a New Employee
        </Text>

        <TextInput
          style={{
            padding: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
          placeholder="India"
          placeholderTextColor={"black"}
        />

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Full Name (First and last Name)
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter your name"
            placeholderTextColor={"black"}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Employee Id</Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Employee Id"
            placeholderTextColor={"black"}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default adddetails;

const styles = StyleSheet.create({});
