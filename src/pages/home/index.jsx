import { useNavigate } from 'react-router-dom';

import bannerImage from '../../assets/banner.png'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { Container, TextContent, Title, TitleHighlight } from "./styles";

const Home = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login');
  }
  return (<>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                    Implemente
                    <br />
                    </TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis architecto omnis neque, autem recusandae, illum eaque iste suscipit quas quibusdam tenetur distinctio officia quis velit possimus voluptate voluptatem a sapiente?
                </TextContent>
                <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={bannerImage} alt="Imagem principal"/>
            </div>
        </Container>
      </>
  );
}

export { Home }