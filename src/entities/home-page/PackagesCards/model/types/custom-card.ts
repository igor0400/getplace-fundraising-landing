import { CSSProperties } from 'react';

export interface CardProps {
  type: 'custom-card' | 'image';
}

export interface CardOption {
  text: string;
  type: 'default' | 'bold' | 'disabled';
}

export interface CustomCardProps extends CardProps {
  title: string;
  price: number;
  options: CardOption[];
  currency: string;
  expDate: string;
  till: string;
  arrow?: {
    bgColor: string;
    cbColor?: string;
    position: 'top' | 'middle';
  };
  btn: {
    text: string;
    bgColor?: string;
  };
  bgColor?: string;
  className?: string;
  style?: CSSProperties;
}

export interface ImageCardProps extends CardProps {
  src: any;
  style?: CSSProperties;
  className?: string;
}
