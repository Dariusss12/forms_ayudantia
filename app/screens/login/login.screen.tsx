import React from "react";
import { SafeAreaView, View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";
import { loginStyle } from "./login.style";

export const LoginScreen = () => {
    return (
        <SafeAreaView 
        style={loginStyle.content}
        >
            <View 
            style={loginStyle.view}
            >
                <Card 
                style={loginStyle.card}
                >
                    <Text variant="displaySmall" style={loginStyle.title}>
                        Iniciar Sesión
                    </Text>
                    <Card.Content>
                        <TextInput 
                          label="Correo Electrónico" 
                          keyboardType="email-address" 
                          mode="outlined"
                          style={loginStyle.textInput}
                          activeOutlineColor="black"
                        > 
                        </TextInput>
                        <TextInput 
                          label="Contraseña" 
                          secureTextEntry={true} 
                          mode="outlined"
                          style={loginStyle.textInput}
                          activeOutlineColor="black"
                        >
                        </TextInput>
                        <Button uppercase={false} textColor="gray">
                            ¿No tienes cuenta? ¡Registrate!
                        </Button>
                        <Button mode="contained" style={loginStyle.cardButton}
                        >
                            Iniciar Sesión
                        </Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
}