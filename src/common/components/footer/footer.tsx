import React from 'react';

import facebook from './assets/faceboock.svg'
import instagram from './assets/instagramm.svg'
import linkedin from './assets/linkedin.svg'
import vk from './assets/vk.svg'
import {Container} from '../../../styled/styled-wpapper';

import {FooterBlock, FooterStyle, SocialIcons} from './styled';

export const Footer = () => (
    <FooterStyle>
        <Container>
            <FooterBlock>
                <p>
                    © 2020-2023 Cleverland. Все права защищены.
                </p>
                <SocialIcons>
                    <a href="https://google.by">
                        <img src={facebook} alt="facebook"/>
                    </a>
                    <a href="https://google.by">
                        <img src={instagram} alt="instagram"/>
                    </a>
                    <a href="https://google.by">
                        <img src={vk} alt="vk"/>
                    </a>
                    <a href="https://google.by">
                        <img src={linkedin} alt="linkedin"/>
                    </a>
                </SocialIcons>
            </FooterBlock>
        </Container>
    </FooterStyle>

);

