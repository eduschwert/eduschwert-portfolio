import { useState } from 'react';
import useMedia from 'use-media';
import { userData } from '@/utils/userData';
import { useThemeProvider } from '@/providers/DarkMode';

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from './style';

import { FaLinkedin, FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { Button } from '@/styles/Buttons';
import { Container, Flex } from '@/styles/Global';

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {
  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}/`;

  const { darkMode, setDarkMode } = useThemeProvider();

  const isWide = useMedia({ maxWidth: '991px' });

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText as="a" target="_blank" href={linkedInUrl}>
              {userData.nameUser}

              <FaLinkedin style={{ marginLeft: '10px' }} />
            </LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? 'Abrir Menu' : 'Fechar Menu'}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        <Flex>
          {isWide ? open && <NavLinks /> : <NavLinks />}
          <Button
            onClick={() => setDarkMode(!darkMode)}
            type="toggleTheme"
            aria-label="switch theme"
            darkMode={darkMode}
          />
        </Flex>
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  return (
    <NavbarLinks>
      <Button type="btLink" as="a" color="grey4" href={`#home`}>
        Home
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#projects`}>
        Projects
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#contact`}>
        Contact
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#social-media`}>
        Social Media
      </Button>
    </NavbarLinks>
  );
};
