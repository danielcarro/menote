import React from 'react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useNavigation } from '@react-navigation/native';
import { Container, Texto, Botao } from './styles';

const ListScreen = () => {
    const user = useAppSelector(state => state.user);
    const navigation = useNavigation();

    const handleEditNote = () => {
        navigation.navigate('EditNote' as never);
      };

    return (
        <Container>
            <Texto>List Screen - {user.name}</Texto>
            <Botao title='ir para editar' onPress={handleEditNote}/>
        </Container>
    )
}

export default ListScreen;