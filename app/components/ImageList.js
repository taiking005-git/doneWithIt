import { StyleSheet, ScrollView, View } from 'react-native'

import AppImageInput from './ImageInput'
import { useRef } from 'react'

const ImageList = ({ imageUris = [], onDeleteImage, onAddImage }) => {
    const scrollViewRef = useRef();
    return (
        <View>
            <ScrollView
                horizontal
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}>
                <View style={styles.container} >
                    {imageUris.map((uri) => (
                        <View key={uri} style={styles.imageContainer}>
                            <AppImageInput
                                imageUri={uri}
                                onChangeImage={() => onDeleteImage(uri)}
                            />
                        </View>))
                    }
                    <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    )
}

export default ImageList

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 5,
    },
    imageContainer: {
        margin: 2,
    }
})