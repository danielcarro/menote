import React from 'react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { Container, Texto } from './styles';


const ListScreen = () => {
    const user = useAppSelector(state => state.user);
    return (
        <Container>
            <Texto>List Screen - {user.name}</Texto>
        </Container>
    )
}

export default ListScreen;