import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// State type
interface AuthState {
    loading: boolean;
    error: string | null;
    user: any;
    token: string | null;
    isAuthenticated: boolean;
}

// Initial state
const initialState: AuthState = {
    loading: false,
    error: null,
    user: {},
    token: null,
    isAuthenticated: false,
};

const API_URL = "http://localhost:8080/api/v1/auth";

// Register
export const register = createAsyncThunk(
    "auth/register",
    async (userInfo: { name: string; email: string; password: string }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${API_URL}/register`, userInfo);
            return data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || "Register failed");
        }
    }
);

// Login
export const login = createAsyncThunk(
    "auth/login",
    async (userInfo: { email: string; password: string }) => {
        try {
            const { data } = await axios.post(`API_URL`, userInfo);
            if (data?.token) {
                await AsyncStorage.setItem("upTodoToken", data.token);
            }
            return data;
        } catch (error: any) {
            return error.response?.data?.message || "Login failed";
        }
    }
);

// Slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = {};
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
            AsyncStorage.removeItem("upTodoToken");
        },
    },
    extraReducers: (builder) => {
        builder
            // Register
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Login
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload?.user || {};
                state.token = action.payload?.token || null;
                state.isAuthenticated = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.user = {};
                state.token = null;
                state.isAuthenticated = false;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
