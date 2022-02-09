import { api } from '../api'

type SignUpRequestData = {
  cnpj?: string;
  name?: string;
  region?: string;
  creci?: string; 
  phone?: string;
  email?: string;  
  password?: string;
  document?: string;
  document_type?: string;
  personalityType?: string;
  cpf?: string;
  social_reason?: string;
}

type SignInRequestData = {
  email: string;
  password: string;
}

export async function signUpRequest(formData: any) {
  try {
    const response = await api.post('/users', formData);
    
    const { data } = response

    return data
  } catch (error) {
    throw { error: 'Falha, tente novamente...' }
  }
}

export async function signInRequest(formData: SignInRequestData) {
  try {
    const response = await api.post('/users/login', formData);
    const { data } = response;

    return data;
  } catch (error) {
    throw { error: 'Falha, tente novamente...' }
  }
}

export async function getMyProfile() {
  try {
    const response = await api.get('/users/myprofile');
    const { data } = response;

    return data;
  } catch (error) {
    throw { error: 'Falha, tente novamente...' }
  }
}