import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import { api } from '../../services/api';

const schema = yup.object({
    email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  }).required('Campo obrigatório');

const Login = () => {
  const navigate = useNavigate();
 
  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  console.log(isValid, errors);
  const onSubmit = async formData => {
    try {
        const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
        if (data.length === 1) {
            navigate('/feed');
        } else {
            alert('E-mail e senha inválido')
        }
    } catch {
        alert('Houve um erro. Tente novamente.')
    }
  };

  return (<>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" control={control} placeholder="Senha" errorMessage={errors?.password?.message} type="password" leftIcon={<MdLock />}/>
                        <Button title="Entrar" variant='secondary' type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
      </>
  );
}

export { Login }