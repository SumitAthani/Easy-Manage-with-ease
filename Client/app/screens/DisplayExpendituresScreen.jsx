import React, { Component } from "react";
import { FlatList } from "react-native";
import ExpenditureBox from "../components/ExpenditureBox";
import expendituresApi from "../api/expenditures";
import AppText from "../components/common/AppText";
import EmptyIndicator from "../components/EmptyIndicator";

class DisplayExpendituresScreen extends Component {
  componentDidMount = async () => {
    const response = await expendituresApi.getExpenditures();
    console.log("its me", response.data);
    this.setState({
      expenditure: response.data.reverse(),
    });
  };

  handleRefresh = async () => {
    const response = await expendituresApi.getExpenditures();

    this.setState({
      expenditure: response.data.reverse(),
    });
  };

  state = {
    refreshing: false,
  };
  render() {
    return (
      <>
        {!this.state.expenditure && <AppText>Loading</AppText>}
        {this.state.expenditure && this.state.expenditure.length == 0 && (
          <EmptyIndicator />
        )}
        <FlatList
          data={this.state.expenditure}
          keyExtractor={(message) => message._id}
          refreshing={this.state.refreshing}
          onRefresh={() => this.handleRefresh()}
          renderItem={({ item }) => <ExpenditureBox expenditure={item} />}
        />
      </>
    );
  }
}

export default DisplayExpendituresScreen;
