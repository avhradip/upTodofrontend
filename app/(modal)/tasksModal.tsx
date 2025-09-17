import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import PriorityDialog from "@/components/PriorityDialog";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors, radius } from "@/constants/colors";
import { Priority } from "@/types";
import { verticalScale } from "@/utility/styling";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import * as Icons from "phosphor-react-native";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TasksModal() {
  const router = useRouter();
  const [priority, setPriority] = useState<Priority | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    priority: "",
    category: "",
    date: "",
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleAddTodo = () => {
    if (!data.title || !data.date || !data.description || !data.priority) {
      Alert.alert("Please enter all fields");
    } else {
      console.log("Final Task:", data);
      router.back();
    }
  };

  const mergeDateTime = (d: Date, t: Date) => {
    return new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      t.getHours(),
      t.getMinutes()
    );
  };

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setDate(selectedDate);
      if (time) {
        const combined = mergeDateTime(selectedDate, time);
        setData({ ...data, date: combined.toISOString() });
      }
    }
  };

  const handleTimeChange = (
    event: DateTimePickerEvent,
    selectedTime?: Date
  ) => {
    setShowTimePicker(Platform.OS === "ios");
    if (selectedTime) {
      setTime(selectedTime);
      if (date) {
        const combined = mergeDateTime(date, selectedTime);
        setData({ ...data, date: combined.toISOString() });
      }
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <BackButton />
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.title}>Add New Task</Text>
          </View>
        </View>

        {/* Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: verticalScale(100) }}
        >
          {/* Task Name */}
          <Input
            label="Task Name"
            placeholder="Enter task title"
            value={data.title}
            onChangeText={(value) => setData({ ...data, title: value })}
          />

          {/* Description */}
          <Input
            label="Description"
            placeholder="Enter task details"
            value={data.description}
            onChangeText={(value) => setData({ ...data, description: value })}
            multiline
            style={{ height: 100, textAlignVertical: "top" }}
          />

          {/* Date Picker */}
          <View style={styles.section}>
            <Text style={styles.label}>Due Date</Text>
            <TouchableOpacity
              style={styles.selectorButton}
              onPress={() => setShowDatePicker(true)}
            >
              {date ? (
                <Text style={styles.selectorText}>
                  {date.toLocaleDateString()}
                </Text>
              ) : (
                <Icons.Calendar
                  size={22}
                  color={colors.neutral300}
                  weight="light"
                />
              )}
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={handleDateChange}
              />
            )}
          </View>

          {/* Time Picker */}
          <View style={styles.section}>
            <Text style={styles.label}>Due Time</Text>
            <TouchableOpacity
              style={styles.selectorButton}
              onPress={() => setShowTimePicker(true)}
            >
              {time ? (
                <Text style={styles.selectorText}>
                  {time.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              ) : (
                <Icons.Timer
                  size={22}
                  color={colors.neutral300}
                  weight="light"
                />
              )}
            </TouchableOpacity>

            {showTimePicker && (
              <DateTimePicker
                value={time || new Date()}
                mode="time"
                is24Hour={true}
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={handleTimeChange}
              />
            )}
          </View>

          {/* Priority */}
          <View style={styles.section}>
            <Text style={styles.label}>Priority</Text>
            <TouchableOpacity
              style={[
                styles.selectorButton,
                priority ? { backgroundColor: colors.primaryDark } : {},
              ]}
              onPress={() => setShowDialog(true)}
            >
              <Icons.Flag size={22} color={colors.neutral200} weight="light" />
              <Text style={[styles.selectorText, { marginLeft: 8 }]}>
                {priority?.number
                  ? `Priority ${priority.number}`
                  : "Select Priority"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Sticky Save Button */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
            <Text style={styles.addButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>

        {/* Priority Dialog */}
        <PriorityDialog
          visible={showDialog}
          onClose={() => setShowDialog(false)}
          onSelect={(p: Priority) => {
            setPriority(p);
            setData({ ...data, priority: p.number.toString() });
          }}
          selectedPriority={priority}
        />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral900,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 0,
  },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  dragHandle: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.neutral600,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.primary,
    textAlign: "center",
  },
  section: { marginTop: 20 },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.neutral200,
    marginBottom: 6,
  },
  selectorButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: radius._10,
    backgroundColor: colors.neutral800,
    borderWidth: 1,
    borderColor: colors.neutral600,
  },
  selectorText: { color: colors.neutral100, fontSize: 15 },
  footer: {
    position: "absolute",
    bottom: 22,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: colors.neutral900,
  },
  addButton: {
    paddingVertical: 14,
    borderRadius: radius._10,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  addButtonText: { color: colors.neutral50, fontSize: 16, fontWeight: "600" },
});
