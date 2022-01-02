import React, { Component } from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import AddExpenditure from "../components/AddExpenditure";
import ExpenditureBox from "../components/ExpenditureBox";
// import AppButton from "./components/common/AppButton";
import { Entypo } from "@expo/vector-icons";
import colors from "../config/colors";
import AppButton from "../components/common/AppButton";

class Expenditure extends Component {
  state = {
    Expenditures: [],
    savedExpenditures: [],
  };

  handleSave = () => {
    const savedExpenditures = this.state.savedExpenditures;
    savedExpenditures.push(this.state.Expenditures);
    this.setState({
      Expenditures: [],
      savedExpenditures: savedExpenditures,
    });
  };

  handleAddExpenditureItem = (item) => {
    var Expenditures = this.state.Expenditures;
    Expenditures.push({
      item: "",
      cost: "",
      id: Expenditures.length,
    });
    this.setState({ Expenditures });
  };

  handleExpenditureItemDelete = (index) => {
    var Expenditures = this.state.Expenditures;
    Expenditures = Expenditures.filter(
      (expenditure) => expenditure.id != index
    );

    Expenditures = Expenditures.map((expenditure) => {
      if (expenditure.id > index) {
        expenditure.id = expenditure.id - 1;
        return expenditure;
      } else return expenditure;
    });

    this.setState({ Expenditures });
    // console.log("Deleted", index, Expenditures);
  };

  handleTextChange = (val, item, index) => {
    var Expenditures = this.state.Expenditures;

    Expenditures = Expenditures.map((exp) => {
      if (exp.id == index) {
        exp[item] = val;

        return exp;
      } else return exp;
    });
    this.setState({ Expenditures });
  };

  render() {
    return (
      <View>
        <View>
          <ScrollView style={{ height: 100, paddingTop: 3 }}>
            {this.state.Expenditures.map((e, i) => {
              return (
                <AddExpenditure
                  key={i}
                  delete={this.handleExpenditureItemDelete}
                  slNo={i}
                  values={e}
                  handleTextChange={this.handleTextChange}
                ></AddExpenditure>
              );
            })}
          </ScrollView>

          <View style={styles.addBtn}>
            <TouchableOpacity
              onPress={(item) => this.handleAddExpenditureItem(item)}
            >
              <Entypo name="add-to-list" size={30} color={colors.dark} />
            </TouchableOpacity>
          </View>

          {this.state.Expenditures.length > 0 && (
            <AppButton onPress={this.handleSave}>Save</AppButton>
          )}
        </View>
        <ScrollView style={{ height: 500 }}>
          {this.state.savedExpenditures.map((exp, i) => {
            return <ExpenditureBox key={i} expenditure={exp} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 15,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.medium,
  },
});

export default Expenditure;
