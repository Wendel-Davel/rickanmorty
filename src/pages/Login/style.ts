
import styled from "styled-components/native";

export const Container = styled.View`
 flex: 1;
 position: relative;
 flex-direction: column;
 align-items: center;
`

export const ContBg = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
  background-color: #000;
`
export const ContView = styled.View`
 flex: 1;
 position: absolute;
 bottom: 0px;
 flex-direction: column;
 align-items: center;
`


export const Logo = styled.Image`
 margin-bottom: 50px;
`

export const Button = styled.TouchableOpacity`
 height: 65px;
 border-radius: 10px;
 background-color:#8328F1;
 align-items: center;
 justify-content: center;
 width:100%;

`
export const TitleButton = styled.Text`
 font-weight: 700;
 color:#fff;
 font-size: 20px;
`
