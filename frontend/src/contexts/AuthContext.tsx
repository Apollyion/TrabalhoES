
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from "next/router";
import { signUpRequest, signInRequest, getMyProfile } from "../services/auth";
import { api } from "../services/api";
import { CommonHeaderProperties } from "../services/axios";

interface IUser {
  type: "CLIENT" | "DELIVERYMAN";
  description: string;
  full_name: string;
  document: string;
  email: string;
  password: string;
}
type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  user: IUser;
}

type AuthProviderProps = {
  children: ReactNode;
}

let authChannel: any;

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as any);
  const isAuthenticated = !!user;

  useEffect(() => {
    try {
      authChannel = new BroadcastChannel('auth');

      authChannel.onmessage = (message: any) => {
        switch (message.data) {
          case 'signOut':
            Router.push('/login');
            break;
          case 'signIn':
            Router.push('/home');
            break;
          default:
            break;
        }
      }
    } catch (error) { }
  }, []);

  useEffect(() => {
    const { 'deliveryman.token': token } = parseCookies();

    async function onGetUserFunction() {
      if (token) {
        api.defaults.headers = {
          Authorization: `Bearer ${token}`
        } as CommonHeaderProperties

        const response = await getMyProfile();

        console.log("response ", response)
        setUser(response);
      }
    }

    onGetUserFunction()
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const data = await signInRequest({
        email,
        password,
      });

      setCookie(undefined, 'deliveryman.token', data.token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      });

      api.defaults.headers = {
        Authorization: `Bearer ${data.token}`
      } as CommonHeaderProperties

      authChannel?.postMessage('signIn');

      Router.push('/home');
    } catch (error: any) {
      throw error.error
    }
  }

  function signOut() {
    destroyCookie(null, 'deliveryman.token', { path: "/" });

    Router.push('/login');
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);