import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import PriorityDialog from "@/components/PriorityDialog";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, radius } from "@/constants/colors";
import { verticalScale } from "@/utility/styling";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import * as Icons from "phosphor-react-native";
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TasksModal() {
  const [priority, setPriority] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    setShowDatePicker(Platform.OS === "ios"); // keep open for iOS
    if (selectedDate) setDate(selectedDate);
  };

  const handleTimeChange = (
    event: DateTimePickerEvent,
    selectedTime?: Date
  ) => {
    setShowTimePicker(Platform.OS === "ios");
    if (selectedTime) setTime(selectedTime);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <BackButton />
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <View style={styles.dragHandle} />
            <Text style={styles.title}>Add New Task</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Task Name */}
          <Input
            label="Task Name"
            placeholder="Enter task title"
            value=""
            onChangeText={() => {}}
          />

          {/* Description */}
          <Input
            label="Description"
            placeholder="Enter task details"
            value=""
            onChangeText={() => {}}
            multiline
            style={{ height: 100, textAlignVertical: "top" }}
          />

          {/* Date Picker */}
          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={() => setShowDatePicker(true)}
          >
            {date ? (
              <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
            ) : (
              <Icons.Calendar color={colors.white} size={25} weight="light" />
            )}
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={date || new Date()}
              mode="date"
              display={Platform.OS === "ios" ? "inline" : "default"}
              onChange={handleDateChange}
            />
          )}

          <TouchableOpacity
            style={styles.timePickerButton}
            onPress={() => setShowTimePicker(true)}
          >
            {time ? (
              <Text style={styles.timeText}>
                {time.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
            ) : (
              <Icons.Timer size={25} color={colors.neutral200} weight="light" />
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

          {/* Priority Selector */}
          <View style={styles.section}>
            <Typo size={15} fontWeight="300" color={colors.neutral200}>
              Priority
            </Typo>
            <TouchableOpacity onPress={() => setShowDialog(true)}>
              <Text style={styles.priorityText}>
                {priority ? priority : "Choose Priority"}
              </Text>
            </TouchableOpacity>

            <PriorityDialog
              visible={showDialog}
              onClose={() => setShowDialog(false)}
              onSelect={(p: any) => setPriority(p)}
            />
          </View>
        </ScrollView>

        {/* Save Button */}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
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
    paddingBottom: verticalScale(40),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
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
  section: {
    marginTop: 20,
  },
  priorityRow: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },
  priorityButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: radius._6,
    backgroundColor: colors.neutral800,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.neutral600,
  },
  priorityText: {
    color: colors.neutral200,
    fontSize: 14,
  },
  addButton: {
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: radius._10,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  addButtonText: {
    color: colors.neutral50,
    fontSize: 16,
    fontWeight: "600",
  },
  datePickerButton: {
    width: 110,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: colors.neutral800,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  dateText: {
    color: colors.white,
    fontSize: 16,
  },
  timePickerButton: {
    width: 110,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: colors.neutral800,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  timeText: {
    color: colors.white,
    fontSize: 16,
  },
});
