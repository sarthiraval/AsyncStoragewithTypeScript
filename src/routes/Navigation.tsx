import * as React from 'react';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';

const Navigation = ()  =>{
  return (
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer>
  );
}
export default Navigation