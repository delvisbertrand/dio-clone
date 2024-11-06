import React from 'react'
import { Header } from '../../components/Header'
import { ButtonWrapper, Column, Container, LoginText, Row, SubtitleSignUp, TenhoContaText, TextContent, Title, TitleSignUp, Wrapper } from './styles'
import { Input } from '../../components/Input'
import { useForm } from 'react-hook-form'
import { MdLock, MdMail, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

const SignUp = () => {

  const schema = yup.object({
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().email('E-mail não é válido').required('Campo obrigatório'),
        password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
      }).required('Campo obrigatório');

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login');
  }

  const onSubmit = async formData => {
    try {
        const { data } = await api.post(`/users`, {name: formData.name, email: formData.email, senha: formData.password});
        console.log(data)
        alert(`Usuário ${data?.name} adicionado com sucesso!`);
        navigate('/feed');
    } catch {
        alert('Houve um erro. Tente novamente.')
    }
  };

  return (<>
        <Header/>
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleSignUp>Começe agora grátis</TitleSignUp>
                    <SubtitleSignUp>Crie a sua conta e make the change._</SubtitleSignUp>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" control={control} errorMessage={errors?.name?.message} placeholder="Nome Completo" leftIcon={<MdPerson />} />
                        <Input name="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" leftIcon={<MdMail />} />
                        <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Password" type="password" leftIcon={<MdLock />} />
                        <ButtonWrapper>
                            <Button title="Criar minha conta" variant='secondary' type="submit"/>
                        </ButtonWrapper>
                    </form>
                    <Row>
                        <TextContent>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TextContent>
                    </Row>
                    <TextContent><TenhoContaText>Já tenho conta.</TenhoContaText> <LoginText onClick={handleClickSignIn}>Fazer login</LoginText></TextContent>
                </Wrapper>
            </Column>
        </Container>
    </>
  )
}

export { SignUp }