import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import React from 'react';
import { StyleSheet } from 'react-native';

const home = () => {
  return (
    <ScreenWrapper>
      <Typo>What do you want to do today?</Typo>
    </ScreenWrapper>
  );
}

export default home

const styles = StyleSheet.create({})