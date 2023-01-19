import { ActivityIndicator, StyleSheet, View } from "react-native";

export function Loading() {
    return (
        <View style={styles.mainContainer}>
            <ActivityIndicator color='#7c3aed' />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09090a'
    }
});
