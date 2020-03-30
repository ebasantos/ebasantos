import React, { Component } from 'react';
import { Container, Form, Input, SubmitButton, HeroButton, HeroImage, HeroName } from './styles';
import {getHeroes} from "../../services/Marvel"
import {Text, FlatList} from  "react-native"

export default class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      heroes : [],
      loading: false,
      page: 1
    }
  }

  renderHeroes = ({ item }) =>{
    return (
      <HeroButton>
        <HeroImage
         source={{
          uri: `${item.thumbnail.path}.${item.thumbnail.extension}`
          }}
        />
        <HeroName>{item.name}</HeroName>
      </HeroButton>
    )
  }

  getHeros = async () => {

    const { page, name } = this.state;

    if (name)
    {
      this.setState({
      page: 1,
      loading: true
      });

      const res = await getHeroes({
      limit: 20,
      name
      });

      this.setState({
      heroes: res.data.results,
      loading: false
      });

    }
    else {

      const res = await getHeroes({
      limit: 20
      });

      this.setState({
        heroes: res.data.results
      });
    }
  };

  async componentDidMount(){
    await this.getHeros();
  }

  handleChangeName = value => this.setState({
    name: value
  })

  render() {
    const {name, heroes, loading} = this.state;
    return (
      <Container>
        <Form>
          <Input value={name} onChangeText={this.handleChangeName}/>
          <SubmitButton loading={loading} onPress={this.getHeros} />
        </Form>
        <FlatList
          showsHorizontalScrollIndicator = {false}
          onEndReachedThreshold={0.2}
          data ={heroes}
          renderItem={this.renderHeroes}
          // onEndReached={}
        />
      </Container>
    );
  }
}
