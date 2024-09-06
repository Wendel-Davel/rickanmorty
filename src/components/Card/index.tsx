import { TouchableOpacityProps } from "react-native";

import{
 Container,
 Avatar,
 ConInfo,
 Name,
 Description
} from './style'

interface Props extends TouchableOpacityProps{
 name:string,
 image:string,
 status:string,
 species:string,
//  vm:boolean,
}
export function Card({name,image,status,species,...props}:Props){
    return(
      <Container {...props}>
         <Avatar source={{uri:image}} />
         <ConInfo >
            <Name>{name}</Name>
            <Description>{status} - {species}</Description>
         </ConInfo>
      </Container>
    )
}