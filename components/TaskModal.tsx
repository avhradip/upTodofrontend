import { colors } from "@/constants/colors";
import * as Icons from "phosphor-react-native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomModal from "./CustomModal";
import Input from "./Input";

type TaskModalProps = {
  visible: boolean;
  onClose: () => void;
  onAdd: (task: { title: string; description: string }) => void;
};

export default function TaskModal({ visible, onClose, onAdd }: TaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (title.trim()) {
      onAdd({ title, description });
      setTitle("");
      setDescription("");
      onClose();
    }
  };

  return (
    <CustomModal visible={visible} onClose={onClose}>
      <View style={styles.modal}>
        <Text style={styles.heading}>Add Task</Text>

        {/* ✅ Title Input */}
        <Input placeholder="Task Title" value={title} onChangeText={setTitle} />

        {/* ✅ Description Input */}
        <Input
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
          style={{ height: 80, textAlignVertical: "top" }}
        />

        {/* ✅ Actions */}
        <View style={styles.actions}>
          <View style={styles.actionsButtons}>
            <TouchableOpacity onPress={handleAdd}>
              <Icons.Timer size={23} color={colors.primaryLight} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAdd}>
              <Icons.Tag size={23} color={colors.primaryLight} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAdd}>
              <Icons.Flag size={23} color={colors.primaryLight} />
            </TouchableOpacity>
          </View>
          <View style={styles.actionsButtons}>
            <TouchableOpacity onPress={onClose} style={styles.cancelBtn}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAdd}>
              <Icons.PaperPlaneRight size={23} color={colors.primaryLight} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.neutral800,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: colors.white,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cancelBtn: {
    padding: 10,
  },
  cancelText: {
    color: "#aaa",
    fontSize: 14,
  },
  actionsButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap:20,
  },
});
