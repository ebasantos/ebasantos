import React, { Component } from 'react';
import { Container, Form, Input, SubmitButton } from './styles';

export default class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: ''
    }
  }

  handleChangeName = value => this.setState({
    name: value
  })

  render() {
    const {name} = this.state;
    return (
      <Container>
        <Form>
          <Input value={name} onChangeText={this.handleChangeName}/>
          <SubmitButton/>
        </Form>
      </Container>
    );
  }
}
