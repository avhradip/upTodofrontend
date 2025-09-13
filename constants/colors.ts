import { scale, verticalScale } from "@/utility/styling";

export const colors = {
    // Brand / Primary
    primary: "#8875FF",         // Purple (main action color like Login, Next, etc.)
    primaryDark: "#6C63FF",     // Slightly darker purple for pressed states
    primaryLight: "#AFA4FF",    // Light tint (hover, secondary highlight)

    // Backgrounds
    background: "#121212",      // Main dark background
    cardBackground: "#1E1E1E",  // Cards, input fields
    overlay: "rgba(0,0,0,0.6)", // Overlays / modals

    // Text
    text: "#FFFFFF",           // Primary text (white)
    textSecondary: "#AFAFAF",  // Secondary (placeholder, labels)
    textDisabled: "#6B6B6B",   // Disabled / low emphasis

    // Borders / Dividers
    border: "#2C2C2C",

    // Neutral grayscale (for flexibility)
    neutral50: "#FAFAFA",
    neutral100: "#F5F5F5",
    neutral200: "#E5E5E5",
    neutral300: "#D4D4D4",
    neutral400: "#A3A3A3",
    neutral500: "#737373",
    neutral600: "#525252",
    neutral700: "#404040",
    neutral800: "#262626",
    neutral900: "#171717",

    // Status / Feedback
    success: "#4CAF50",  // Green (success messages)
    error: "#FF5252",    // Red (error messages)
    warning: "#FFC107",  // Amber (warnings)

    white: "#FFFFFF",
    black:"000000"
};



export const spacingX = {
    _3: scale(3),
    _5: scale(5),
    _7: scale(7),
    _10: scale(10),
    _12: scale(12),
    _15: scale(15),
    _20: scale(20),
    _25: scale(25),
    _30: scale(30),
    _35: scale(35),
    _40: scale(40),
};

export const spacingY = {
    _5: verticalScale(5),
    _7: verticalScale(7),
    _10: verticalScale(10),
    _12: verticalScale(12),
    _15: verticalScale(15),
    _17: verticalScale(17),
    _20: verticalScale(20),
    _25: verticalScale(25),
    _30: verticalScale(30),
    _35: verticalScale(35),
    _40: verticalScale(40),
    _50: verticalScale(50),
    _60: verticalScale(60),
};

export const radius = {
    _3: verticalScale(3),
    _6: verticalScale(6),
    _10: verticalScale(10),
    _12: verticalScale(12),
    _15: verticalScale(15),
    _17: verticalScale(17),
    _20: verticalScale(20),
    _30: verticalScale(30),
};
