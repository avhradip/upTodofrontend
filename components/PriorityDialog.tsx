import { colors } from "@/constants/colors";
import { priorities } from "@/constants/data";
import * as Icons from "phosphor-react-native";
import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelect: any;
}

const PriorityDialog = ({ visible, onClose, onSelect }: Props) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <Text style={styles.title}>Task Priority</Text>

          <View style={styles.grid}>
            {priorities.map((p) => {
              // Get the icon component dynamically
              const IconComponent = Icons[
                p.name as keyof typeof Icons
              ] as React.FC<Icons.IconProps>;

              return (
                <TouchableOpacity
                  key={p.number}
                  style={[
                    styles.option,
                    {
                      borderColor: colors.neutral600,
                    },
                  ]}
                  onPress={() => {
                    console.log(p);
                    onSelect(p);
                    // onClose();
                  }}
                >
                  {IconComponent && (
                    <IconComponent
                      size={22}
                      weight="light"
                      color={colors.neutral200}
                    />
                  )}
                  <Text
                    style={[
                      styles.optionText,
                      {
                        color: colors.neutral200,
                      },
                    ]}
                  >
                    {p.number}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity style={styles.saveBtn} onPress={onClose}>
            <Text style={styles.cancelText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PriorityDialog;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
    backgroundColor: colors.neutral900,
    padding: 20,
    borderRadius: 12,
    width: "80%",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.neutral50,
    marginBottom: 15,
    textAlign: "center",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  cancelBtn: {
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.neutral800,
    alignItems: "center",
  },
  saveBtn: {
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.primaryDark,
    alignItems: "center",
  },
  cancelText: {
    color: colors.neutral300,
    fontSize: 15,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // spacing between items
    marginVertical: 10,
  },
  option: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 6,
    width: "30%", // adjust width to fit 3 items per row
    alignItems: "center",
  },
});
