import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./common/AppText";
import ExpenditureBoxHead from "./ExpenditureBoxHead";

class ExpenditureBox extends Component {
  render() {
    const expenditure = this.props.expenditure.transactions;
    var total = 0;
    expenditure.map((exp) => {
      total += Number(exp.cost);
    });
    return (
      <View style={styles.container}>
        <AppText style={styles.date} size={20} weight="bold">
          {this.props.expenditure.date}
        </AppText>

        <ExpenditureBoxHead></ExpenditureBoxHead>

        {expenditure.map((item, i) => {
          var color = Number(item.cost) < 0 ? "lightgreen" : "inherit";
          if (item.cost >= 100) {
            color = colors.danger;
          }
          return (
            <View key={i}>
              <View style={styles.item}>
                <AppText style={styles.sl}>{item.id + 1}</AppText>
                <AppText style={styles.itemName}>{item.item}</AppText>
                <View
                  style={{
                    backgroundColor: color,
                    padding: 1,
                    borderRadius: 5,
                  }}
                >
                  <AppText>₹ {Number(item.cost)}</AppText>
                </View>
              </View>
            </View>
          );
        })}
        <View style={{ display: "flex", flexDirection: "row-reverse" }}>
          <AppText>Total: ₹ {total}</AppText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: "2%",
    margin: 7,
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 2,
  },
  cost: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    textAlign: "center",
  },
  date: {
    backgroundColor: colors.medium,
    padding: ".5%",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.lighter,
    padding: "1.5%",
    borderRadius: 5,
    margin: 0.5,
  },
  sl: {
    display: "flex",
    flex: 1,
    textAlign: "center",
  },
  itemName: {
    display: "flex",
    flexDirection: "row",
    flex: 3,
    justifyContent: "center",
    backgroundColor: colors.medium,
    textAlign: "center",
  },
});

export default ExpenditureBox;
