import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  style?: any;
  onPositionChange?: () => void;
  active?: boolean;
}
