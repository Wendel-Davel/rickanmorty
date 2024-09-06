import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgba(52, 52, 52, 0.8);
`
export const ContInfo = styled.View`
  flex-direction: column;
  align-items: center;
  background-color:#161616;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  position: absolute;
  bottom: 0;
  width:100%;
  padding-bottom: 200px;
  flex: 1;
  padding-left:20px;
  padding-right: 20px;
`;

export const FotoAvatar = styled.Image`
  width:150px;
  height:150px;
  border-radius: 100px;
  margin-top: -60px;
`;

export const ContInfoPerfil = styled.View`
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
export const ContAllInfo = styled.View`
  margin-top: 60px;
  flex: 1;
  width:100%;

`;
export const ContText = styled.View`
  margin-bottom: 30px;
  flex: 1;
  width:100%;
`;

export const NamePerfil = styled.Text`
  font-size:26px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const DescPerfil = styled.Text`
  font-size:16px;
  color: #fff;
  text-align: center;
  margin-top: 5px;
`;

export const TextPrimary = styled.Text`
  font-size:18px;
  color: #fff;
  font-weight: 500;
`;

export const TextSecundary = styled.Text`
  font-size:16px;
  color: #fff;
  margin-top: 5px;
`;


export const CloseModal = styled.TouchableOpacity`
 background-color:#8328F1;
 width: 50px;
 height: 50px;
 align-items: center;
 justify-content: center;
 border-radius: 100px;
 position: absolute;
 bottom: 60px;
`
