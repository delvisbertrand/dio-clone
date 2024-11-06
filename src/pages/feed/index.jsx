import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { UserInfo } from '../../components/UserInfo';

import { Column, Container, TitleHighlight } from "./styles";

const Feed = () => {
  return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={60} name="Delvis Bertrand" image="https://avatars.githubusercontent.com/u/13434470?v=4"/>
                <UserInfo percentual={35} name="Delvis Bertrand" image="https://avatars.githubusercontent.com/u/13434470?v=4"/>
                <UserInfo percentual={25} name="Delvis Bertrand" image="https://avatars.githubusercontent.com/u/13434470?v=4"/>
                <UserInfo percentual={12} name="Delvis Bertrand" image="https://avatars.githubusercontent.com/u/13434470?v=4"/>
                <UserInfo percentual={10} name="Delvis Bertrand" image="https://avatars.githubusercontent.com/u/13434470?v=4"/>
            </Column>
        </Container>
      </>
  );
}

export { Feed }