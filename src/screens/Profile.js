import React from "react";
import { View, Linking } from "react-native";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
    
	return (
		<Layout>
			<View
				 style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Para consultar suas vacinas aprazadas clique no botão abaixo e acesse seu perfil!
            </Text>
            
            <Button
              text="Consultar Vacinas"
              status="danger"
              onPress={() => Linking.openURL("https://aplicativo.imunemob.com.br")}
              style={{
                marginTop: 40,
              }}
            />

           
           
          </SectionContent>
        </Section>
			</View>
		</Layout>
	);
}