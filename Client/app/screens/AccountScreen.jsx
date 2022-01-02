import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "../components/common/Icon";
import ListItem from "../components/common/ListItem";
import useAuth from "../auth/useAuth";
import colors from "../config/colors";


function AccountScreen(props) {
  const { user, logOut } = useAuth();

  
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <ListItem
          title={user.username}
          subTitle={user.email}
          ImageComponent={<Icon name="face" />}
        />
      </View>
      <View>
        <ListItem
          title="Settings"
          subTitle="Change settings of the app"
          ImageComponent={
            <Icon name="ship-wheel" backgroundColor="dodgerblue" />
          }
        />
        <ListItem
          title="Log Out"
          onPress={() => logOut()}
          ImageComponent={
            <Icon name="power-standby" backgroundColor={colors.danger} />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  profile: {
    backgroundColor: colors.lighter,
    elevation: 6,
  },
});

export default AccountScreen;
