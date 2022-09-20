import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import TelaJavaScript from "./youtube-base-projeto/componentes/TelaJavaScript";
import TelaReact from "./youtube-base-projeto/componentes/TelaReact";
import TelaNode from "./youtube-base-projeto/componentes/TelaNode";

const MenuNav = createStackNavigator
();

export default function App() {
  return (
    <NavigationContainer>
      <MenuNav.Navigator>
        <MenuNav.Screen name="Java" component={TelaJavaScript}/>
        <MenuNav.Screen name="Node" component={TelaNode}/>
        <MenuNav.Screen name="React" component={TelaReact}/>
      </MenuNav.Navigator>
   
    </NavigationContainer>
  );
}

