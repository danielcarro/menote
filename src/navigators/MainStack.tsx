import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from "../pages/ListScreen";
import EditNoteScreen from "../pages/EditNoteScreen";


const MainStack = createNativeStackNavigator();

export default () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="List" component={ListScreen}  />
            <MainStack.Screen name="EditNote" component={EditNoteScreen}  />
        </MainStack.Navigator>
    );
}



