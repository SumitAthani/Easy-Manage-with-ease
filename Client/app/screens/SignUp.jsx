import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import usersApi from "../api/users";
import useAuth from "../auth/useAuth";
import Screen from "../components/common/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/Form";
import apiClient from "../api/client";
import authApi from "../api/auth";
import { ErrorMessage } from "../components/Form";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function SignUp(props) {
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await usersApi.register(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.message);
      else {
        setError("An unexpected error occured");
        console.log(result);
      }
      return;
    }

    await apiClient.addAsyncRequestTransform(async (request) => {
      request.headers["x-auth-token"] = result.data.token;
      console.log("headers set");
    });

    const { data: response } = await authApi.login(
      userInfo.email,
      userInfo.password
    );

    const token = response.token;
    auth.login(token);
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          name="username"
          autoCapitalize="none"
          autoCorrect={false}
          icon="face"
          placeholder="Username..."
        />
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email-outline"
          keyboardType="email-address"
          placeholder="Email..."
        />

        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="key-outline"
          placeholder="Password..."
          secureTextEntry
          width="100%"
        />
        <SubmitButton title="Sign Up" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

export default SignUp;
