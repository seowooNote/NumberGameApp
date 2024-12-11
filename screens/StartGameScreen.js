import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";


function StartGameScreen(props) {
    const [ enteredNumber, setEnteredNumber ] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // show alert ...
            // React Native 에서 제공하는 API Alert 알림을 사용할 수 있음
            Alert.alert(
                'Invalid Number!', // 알림의 제목
                '숫자는 1 과 99 사이어야 합니다.', // 알림의 내용
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }
        
        props.onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad" // 해당 Input 입력 가능 타입 지정
                autoCapitalize="none" // 문자 입력시 자동 대문자 시작 세팅
                autoCorrect={false} // 자동 수정
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,

        elevation: 4, // boxShadow - Android 전용 (ReactNative 는 boxShadow CSS 가 없음)

        // IOS 전용 그림자 넣기 (ReactNative 는 boxShadow CSS 가 없음)
        shadowColor: 'black', // 그림자 색상
        shadowOffset: { width: 0, height: 2 }, // 그림자 방향 (왼쪽에서 오른쪽)
        shadowRadius: 6, // 그림자가 얼마나 번지는지
        shadowOpacity: 0.5, // 그림자 세기
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
})