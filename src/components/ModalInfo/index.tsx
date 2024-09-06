import Ionicons from '@expo/vector-icons/Ionicons';
import{
 Container,
 ContInfo,
 FotoAvatar,
 ContInfoPerfil,
 NamePerfil,
 DescPerfil,
 TextPrimary,
 TextSecundary,
 ContAllInfo,
 CloseModal,
 ContText,
} from './style'

type PropF = {
        name:string,
        image:string,
        status:string,
        species: string;
        location: {
            name:string
        };

    closeModal: () => void;
}



export function InfoModal({closeModal, name, image,location, species, status}:PropF){
    return(
        <Container>
            <ContInfo>
                <FotoAvatar source={{uri:image}}/>

                <ContInfoPerfil>
                    <NamePerfil>{name}</NamePerfil>
                    <DescPerfil>{status} - {species} </DescPerfil>
                </ContInfoPerfil>

                <ContAllInfo>
                    <ContText>
                        <TextPrimary>Last known location:</TextPrimary>
                        <TextSecundary>{location.name}</TextSecundary>
                    </ContText>
                    <ContText>
                        <TextPrimary>First seen in:</TextPrimary>
                        <TextSecundary>Rick Potion #9</TextSecundary>
                    </ContText>
                </ContAllInfo>
                <CloseModal onPress={closeModal}><Ionicons name="close" size={25} color="#ffff" /></CloseModal>
            </ContInfo>
            
        </Container>
    )
}