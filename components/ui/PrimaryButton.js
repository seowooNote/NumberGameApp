import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

// 커스텀 버튼 만들기 
function PrimaryButton(props) {

    function pressHandler() {
        props.onPress();
    }

    return (
        <View style={styles.buttonOuterContainer}>
            {/* android_ripple : Android 전용 물결 효과 Hover */}
            {/* style={({pressed}) => pressed ? [styles.buttonInnterContainer, styles.pressd] : styles.buttonInnterContainer} : IOS Hover 넣는법 */}
            <Pressable 
                style={({pressed}) => pressed ? [styles.buttonInnterContainer, styles.pressd] : styles.buttonInnterContainer} 
                onPress={pressHandler} 
                android_ripple={{ color : Colors.primary600 }}
            >
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnterContainer: {
        backgroundColor: Colors.primary600,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 50,
        margin: 4,
        elevation: 2, // Android
    
        // IOS
        shadowColor: 'black', // 그림자 색상
        shadowOffset: { width: 0, height: 2 }, // 그림자 방향 (왼쪽에서 오른쪽)
        shadowRadius: 6, // 그림자가 얼마나 번지는지
        shadowOpacity: 0.5, // 그림자 세기
    },
    // ReactNative CSS 는 상속의 개념이 존재하지 않음
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressd: {
        opacity: 0.75,

    },
});