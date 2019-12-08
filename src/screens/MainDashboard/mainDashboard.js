import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: "app.screens.ShoppingCartScreen",
                    passProps: {
                      text: "This is tab 1"
                    }
                  }
                }
              ]
            }
          },
          {
            component: {
              name: "app.screens.CashDrawerScreen",
              passProps: {
                text: "This is tab 2"
              }
            }
          },
          {
            component: {
              name: "app.screens.ReportsScreen",
              passProps: {
                text: "This is tab 3"
              }
            }
          },
          {
            component: {
              name: "app.screens.SettingsScreen",
              passProps: {
                text: "This is tab 4"
              }
            }
          }
        ]
      }
    }
  });
};

export default startTabs;
