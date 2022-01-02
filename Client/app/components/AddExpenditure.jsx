import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import { MaterialIcons } from "@expo/vector-icons";

class AddExpenditure extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.sl}>{this.props.slNo + 1}.</Text>
          <TextInput
            style={styles.item}
            placeholder="Item..."
            value={this.props.values.item}
            name="item"
            onChangeText={(val) =>
              this.props.handleTextChange(val, "item", this.props.slNo)
            }
          />
          <TextInput
            style={styles.cost}
            placeholder="Cost..."
            value={this.props.values.cost}
            keyboardType="numeric"
            onChangeText={(val) => {
              this.props.handleTextChange(val, "cost", this.props.slNo);
            }}
          />
          <View style={styles.delete}>
            <TouchableOpacity
              onPress={() => this.props.delete(this.props.slNo)}
            >
              <MaterialIcons name="delete" color={colors.secondary} size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.medium,
    padding: "1%",
  },
  delete: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
  sl: {
    display: "flex",
    flex: 0.6,
    textAlign: "center",
    textAlignVertical: "center",
    // fontSize: 18,
  },
  item: {
    flex: 2,
    fontSize: 18,
  },
  cost: {
    flex: 1,
    fontSize: 18,
  },
});

export default AddExpenditure;
