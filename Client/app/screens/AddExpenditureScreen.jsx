// import AppButton from "./components/common/AppButton";
import { MaterialIcons } from "@expo/vector-icons";
import React, { Component, createRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AddExpenditure from "../components/AddExpenditure";
import AppButton from "../components/common/AppButton";
import colors from "../config/colors";
import expenditureApi from "../api/expenditures";

class AddExpenditureScreen extends Component {
  state = {
    date: this.date,
    Expenditures: [],
  };

  constructor() {
    super();
    this.ScrollView = createRef();
  }

  date = new Date().toString().split(" ").splice(1, 3).join(" ");

  // checkError = () => {
  //   this.state.Expenditures.map((trans) => {
  //     if (!Number(trans.cost)) {
  //       console.log(trans);
  //       if (trans.cost == null) alert("Plese provide all the cost/costs");
  //       else alert("Only Numbers allowed for cost/costs");
  //       return true;
  //     }
  //     if (trans.item == "") {
  //       alert("Please do specify the item name/names");
  //       return true;
  //     }
  //   });
  //   return false;
  // };

  handleSave = async () => {
    const data = {
      userId: 1,
      date: this.date,
      transactions: this.state.Expenditures,
    };
    var error = true;

    console.log("herer", error);
    const response = await expenditureApi.addExpenditures(data);
    console.log(response.data);
    if (!response.ok) return alert("Could not save");
    alert("Added to your Account💰");
    this.setState({
      Expenditures: [],
    });
  };

  handleAddExpenditureItem = () => {
    var Expenditures = this.state.Expenditures;
    Expenditures.push({
      item: "",
      cost: null,
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
        if (item == "cost") {
          if (!Number(val)) {
            console.log("here", val);
          }
        }
        console.log(val, item, index);
        return exp;
      } else return exp;
    });
    this.setState({ Expenditures });
  };

  render() {
    return (
      <View
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: colors.grey,
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: "800" }}>{this.date}</Text>
        </View>
        <View style={{ display: "flex", flex: 0.78 }}>
          <ScrollView
            ref={this.ScrollView}
            onContentSizeChange={() => this.ScrollView.current.scrollToEnd()}
          >
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
        </View>

        <View style={{ display: "flex", flex: 0.2 }}>
          <View style={styles.addBtn}>
            <TouchableOpacity
              onPress={(item) => this.handleAddExpenditureItem(item)}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons
                  name="add-circle"
                  size={40}
                  color={colors.primary}
                />
              </View>
            </TouchableOpacity>
            {this.state.Expenditures.length > 0 && (
              <View>
                <AppButton onPress={this.handleSave} title="Save">
                  Save
                </AppButton>
              </View>
            )}
          </View>
        </View>
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
    alignItems: "center",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.secondary,
  },
});

export default AddExpenditureScreen;
