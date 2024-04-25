import React from "react";
import { KeyboardAvoidingView, SafeAreaView, View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";
import { loginStyle } from "./login.style";

import useViewModel from './ViewModel';


export const LoginScreen = () => {

    const { email, password, onChange, login, errorMessage } = useViewModel();
    
    return (
        <SafeAreaView style={loginStyle.content}>
            <KeyboardAvoidingView style={loginStyle.view}>
                <Card style={loginStyle.card}>
                    <Text variant="displaySmall" style={loginStyle.title}>Iniciar Sesión</Text>
                    <Card.Content>
                        <TextInput
                            label="Correo Electrónico" 
                            keyboardType="email-address" 
                            mode="outlined" 
                            style={loginStyle.textInput} 
                            activeOutlineColor="black"
                            value={email}
                            onChangeText={email => onChange("email",email)}
                        >
                        </TextInput>
                        {errorMessage && <Text style={loginStyle.errorMessage}>{errorMessage.email}</Text>}

                        <TextInput
                            label="Contraseña" 
                            secureTextEntry={true} 
                            mode="outlined" 
                            style={loginStyle.textInput} 
                            activeOutlineColor="black"
                            value={password}
                            onChangeText={password => onChange("password",password)}
                        >
                        </TextInput>
                        {errorMessage && <Text style={loginStyle.errorMessage}>{errorMessage.password}</Text>}
                        {errorMessage && <Text style={loginStyle.errorMessage}>{errorMessage.credenciales}</Text>}
                        <Button mode="contained" style={loginStyle.cardButton} onPress={login}>Iniciar Sesión</Button>
                    </Card.Content>
                </Card>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}