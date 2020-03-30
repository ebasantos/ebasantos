import styled from 'styled-components/native';
import {Button} from 'galio-framework'
import Colors from '../../constantes/Colors'

export const Container = styled(Button)`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${Colors.grayLight};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: Colors.gray,
  placeholder: 'Digite o nome de um herói'
})`
  flex: 1;
  height: 40px;
  background-color: ${Colors.grayLight};
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid ${Colors.grayLight};
`;

export const SubmitButton = styled(Button).attrs({
    onlyIcons: true,
    icon: "search1",
    iconFamily: "antdesing",
    iconSize: 25,
    iconColor: Colors.white,
    color: Colors.black
})`
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  height: 40px;
`
