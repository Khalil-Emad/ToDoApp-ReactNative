import CheckBox from '@react-native-community/checkbox';
import React from "react";
import { View, Text, FlatList } from "react-native";
import { todoList as styles } from "../../styles";
const TodoList = ({ todos }) => {

    const textDoc = (item) => {
        if (item.done) {
            item.title.style.textDecoration = "line-through";
        } else if (!item.done) {
            item.title.style.textDecoration = "";
        }
    };

    return (
        <FlatList
            style={{ height: "100%" }}
            data={todos}
            renderItem={({ item }) => {
                return (
                    <View style={styles.item}>
                        <Text>Title: {item.title}</Text>
                        <CheckBox value={item.done} onChange={() => textDoc(item)} />
                    </View>
                );
            }}
            ListHeaderComponent={() => <Text style={styles.header}>My todos</Text>}
            ListFooterComponent={() => <Text style={{ ...styles.header, fontSize: 18 }}>End of Todos</Text>}
            ListEmptyComponent={() => <Text>no todos today </Text>}
            ItemSeparatorComponent={() => <View style={styles.seperator}></View>}

        />
    );
};

export default TodoList;
