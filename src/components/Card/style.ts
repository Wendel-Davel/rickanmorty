import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
 flex-direction: row;
 align-items: center;
 padding:8px;
 border-radius: 10px;
 background-color: #161616;
 height: 113px;
 margin-top: 10px;
`
export const Avatar = styled.Image`
  border-radius: 100px;
  height: 95px;
  width:95px;
`;
export const ConInfo = styled.View`
 margin-left: 30px;
`;
export const Name = styled.Text`
 font-size: 22px;
 font-weight: bold;
 color: #fff;
`;
export const Description = styled.Text`
 font-size: 18px;
 color: #fff;
`;