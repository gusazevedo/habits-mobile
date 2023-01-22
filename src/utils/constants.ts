import {Dimensions} from "react-native";

const weekDays =  7;
const horizontalPadding = (32*2) / 5;
export const dayMarginBetween = 8;
export const daySize = (Dimensions.get('screen').width / weekDays) - (horizontalPadding + 5);
export const week = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];