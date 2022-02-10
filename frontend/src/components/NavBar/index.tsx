import { AiFillFile, AiFillHome } from "react-icons/ai";
import { Container, Content } from "./styles";
import { FaUserCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";

export function NavBar() {
  const { pathname } = useRouter();
  const selectedTab = pathname.split("/")[1];

  const { signOut } = useAuth();

  return (
    <Container>
      <Content>
        <Link href={"/home"} passHref>
          <div className="item" style={{ cursor: "pointer" }}>
            <AiFillHome
              size={22}
              color={selectedTab === "home" ? "#000" : "#6D6C7B"}
            />
            <p
              style={{
                color: `${selectedTab} === 'home' ? '#000' : '#6D6C7B'`,
              }}
            >
              Home
            </p>
          </div>
        </Link>
        <Link href={"/profile"} passHref>
          <div className="item" style={{ cursor: "pointer" }}>
            <FaUserCircle
              size={22}
              color={selectedTab === "profile" ? "#000" : "#6D6C7B"}
            />
            <p
              style={{
                color: `${selectedTab} === 'profile' ? '#0000' : '#6D6C7B'`,
              }}
            >
              Meu perfil
            </p>
          </div>
        </Link>
      </Content>
      <button onClick={signOut}>
        <FaSignOutAlt size={22} />
        <p>Sair</p>
      </button>
    </Container>
  );
}
