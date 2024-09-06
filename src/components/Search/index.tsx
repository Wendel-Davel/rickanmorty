import { TextInputProps } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import {
 Container,
 InputText,
} from './style'

type Props = TextInputProps;

export function Input(props:Props){
    return(
 
        <Container>
          <InputText
           placeholderTextColor="#9C9C9C"
           {...props}
          />
          <Ionicons name="search" size={25} color="#8328F1" />
        </Container>

    )
}