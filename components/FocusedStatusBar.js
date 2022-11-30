import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'

const FocusedStatusBar = (props) => {
    const isFocued = useIsFocused();
  return isFocued ? <StatusBar animated={true} {...props} /> : null;
}

export default FocusedStatusBar