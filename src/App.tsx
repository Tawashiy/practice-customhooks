import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "おなまえさん",
  email: "おなまえさん",
  address: "おなまえさん"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
