import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useRef } from "react"; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, CriarText2, Row, Wrapper } from './styles';
import axios from "axios";

const schema = yup.object({
    name: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('email não é válido').required('Campo Obrigatório'),
    password: yup.string().min(3,'No minimo 3 caracteres').required('Campo Obrigatório'),
  }).required();

const Cadastrar = () => {

    const navigate = useNavigate()
    const FormRef = useRef();
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async () => {

        const {inputNome} = FormRef.current;
        const {inputEmail} = FormRef.current;
        const {inputSenha} = FormRef.current;
      const dados =  {
        "name" : inputNome.value,
        "email": inputEmail.value,
        "senha": inputSenha.value
      }
    
      try {
        await api.post('/users', dados)
      navigate('/login ') 
      } catch (error) {
        console.log(error)
      }
      
    }
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Começe agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)} ref={FormRef}> 
                 
                <Input id="inputNome" placeholder="Nome completo" leftIcon={<MdPerson />} errorMessage={errors?.email?.message} name="name"   control={control} />
                    <Input id="inputEmail" placeholder="E-mail" leftIcon={<MdEmail />} errorMessage={errors?.email?.message} name="email"   control={control} />
                    
                    <Input id="inputSenha" type="password" placeholder="Senha" leftIcon={<MdLock />} errorMessage={errors?.password?.message} name="password"  control={control} />
                   
                    <Button title="Criar minha conta"   variant="secondary" type="submit"/>
                </form>

                <Row>
                <CriarText2>Ao clicar em "criar minha conta grátis", declaro que aceite as Politicas de Privacidade e os Termos de USO da DIO.
                </CriarText2>
    
                </Row>
                <Row>
                <CriarText2>
                Já tenho Conta <a href="/login">Fazer Login</a>
                </CriarText2>
                       
                </Row> 
            
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastrar }