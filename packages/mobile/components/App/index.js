import React from "react";
import PropTypes from "prop-types";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import MainSection from "../../components/MainSection";
import container from "todo-core/build/containers/App";

const App = ({ todos, actions }) => (
  <ScrollView contentInset={{ top: 20 }} style={styles.container}>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
  </ScrollView>
);

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
});

export default container(App);
