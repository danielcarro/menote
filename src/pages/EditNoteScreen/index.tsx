import React from 'react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { Container, Texto } from './styles';


const EditNoteScreen = () => {
    const user = useAppSelector(state => state.user);
    return (
        <Container>
            <Texto>Edit Note Screen - {user.name}</Texto>
        </Container>
    )
}

export default EditNoteScreen;