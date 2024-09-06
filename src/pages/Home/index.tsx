import { KeyboardAvoidingView, Modal, Platform, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Input } from '../../components/Search'
import { Card } from '../../components/Card'
import { SetStateAction, useEffect, useState } from 'react'

import {
 Container,
 Logo,
 ContInput,
 ContList,
 ContModal

} from './style'
import { InfoModal } from '../../components/ModalInfo'
import { FlatList } from 'react-native-gesture-handler'

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    location:{
        name:string;
    };
    // Adicione outros campos conforme necessário
  }

// const characters = [
//     {
//       id:1,
//       name:'Rick Sanchez',
//       status:'Alive - Human',
//       image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
//     }
// ]

export function Home(){

    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [ searchInput, SetSerachInpu ] = useState<string>('');
    const [list, setList] = useState(characters);
   
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://rickandmortyapi.com/api/character');
          const data = await response.json();
          setCharacters(data.results);
        } catch (err) {
          setError('Failed to fetch characters');
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);




    const openModal = (character: Character) => {
        setSelectedCharacter(character);
        setModalVisible(true);
      };
    
      const closeModal = () => {
        setSelectedCharacter(null);
        setModalVisible(false);
      };

 

    useEffect(() => {
      if( searchInput === ''){
        setList(characters)
      }else{
        setList(
          characters.filter(
            (item) => item.name.toLowerCase().indexOf( searchInput.toLowerCase()) > -1
          )
        )
      }
    },[searchInput])

    
    return( 
      <Container>

       
         
            <ContInput>
                <Logo  source={require('../../assets/logo.png')}/>
                <Input
                  placeholder='Buscar Personagem'
                  value={searchInput}
                  onChangeText={(t) => SetSerachInpu(t)}
                />
            </ContInput>

            <ContList>
                <FlatList
                 showsVerticalScrollIndicator={false}
                  data={list}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <Card
                    name={item.name}
                    image={item.image}
                    species={item.species}
                    status={item.status}
                    onPress={() => openModal(item)}
                    
                    />
                  )}
                />
 
            </ContList>
   
  

  {selectedCharacter && (
        <ContModal transparent={true} animationType="slide" visible={modalVisible}>
          <InfoModal
           name={selectedCharacter.name}
           image={selectedCharacter.image}
           status={selectedCharacter.status}
           species={selectedCharacter.species}
           location={selectedCharacter.location}
           closeModal={closeModal} 
           />
        </ContModal>
      )}
      
      </Container>


    )
}

function item(_prevState: undefined): undefined {
    throw new Error('Function not implemented.')
}
function data(prevState: undefined): undefined {
    throw new Error('Function not implemented.')
}

