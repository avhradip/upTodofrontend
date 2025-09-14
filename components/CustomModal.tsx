import React from "react";
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";

type CustomModalProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function CustomModal({
  visible,
  onClose,
  children,
}: CustomModalProps) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <KeyboardAvoidingView
            style={styles.modalWrapper}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalWrapper: {
    width: "100%",
  },
});
