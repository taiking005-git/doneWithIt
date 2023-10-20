import { Button, FlatList, Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyle from '../config/style'
import AppText from './AppText';
import { useState } from 'react';
import PickerItem from './PickerItem';

const AppPicker = ({ iconText, items, placeholder, onSeletedItem, selectedItem }) => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {iconText &&
                        <MaterialCommunityIcons
                            name={iconText}
                            size={25}
                            color={defaultStyle.colors.medium}
                        />}
                    <AppText style={[styles.text, defaultStyle.text]}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons
                        name={"chevron-down"}
                        size={25}
                        color={defaultStyle.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Button title='close' onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={items => items.value.toString()}
                    renderItem={({ item }) =>
                        <PickerItem
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false)
                                onSeletedItem(item)
                            }}
                        />
                    }
                />
            </Modal>
        </>
    )
}

export default AppPicker

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyle.colors.light,
        width: "100%",
        flexDirection: "row",
        borderRadius: 30,
        padding: 10,
        alignItems: "center",
        gap: 10,
        marginVertical: 10,
    },
    text: {
        flex: 1,
    }
})