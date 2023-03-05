import "./App.css";
import ChatContainer from "./components/ChatContainer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div
      className="h-screen w-screen grid place-items-center"
      style={{
        background: `linear-gradient(to bottom, #01A784 8rem, #EDEDEB 8rem)`,
      }}
    >
      <div className="h-[95vh] w-[98vw] flex rounded-sm">
        <Sidebar />
        <ChatContainer />
      </div>
    </div>
  );
}

export default App;

//linear-gradient(to bottom, #01A784, #EDEDEB)
