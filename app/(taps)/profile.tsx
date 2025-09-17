import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors } from '@/constants/colors'
import { logout } from '@/Redux/authSlice'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'

const profile = () => {

  const router=useRouter();
    const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch(logout());
      router.replace("/(onboarding)/onboarding1");
    };

  return (
    <ScreenWrapper>
      <Typo>profile</Typo>
      <TouchableOpacity onPress={handleLogout}>
        <Typo color={colors.primary} size={16}>
          Logout
        </Typo>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}

export default profile

const styles = StyleSheet.create({})