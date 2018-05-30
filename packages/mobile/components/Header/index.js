import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import Animation from "lottie-react-native";
import PropTypes from "prop-types";
import container from "todo-core/build/containers/Header";
import TodoTextInput from "../TodoTextInput";

const Header = ({ handleSave }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>todos</Text>
    <TodoTextInput newTodo onSave={handleSave} placeholder="What needs to be done?" />
  </View>
);

Header.propTypes = {
  handleSave: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  headerLogo: {
    flex: 1,
    height: 200,
  },
  headerText: {
    margin: 16,
    marginTop: 24,
    fontSize: 72,
    fontWeight: "100",
    textAlign: "center",
    color: "rgba(175, 47, 47, 0.15)",
  },
});

export default container(Header);
