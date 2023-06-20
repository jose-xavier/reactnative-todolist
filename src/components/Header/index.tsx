import { Image } from 'react-native'
import { HeaderContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <Image source={require('../../../assets/Logo.png')}
            />
        </HeaderContainer>
    )
}