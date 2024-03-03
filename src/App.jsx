import ChatScreen from './ChatScreen';
import './App.css'

const App = () => {

  const mainStyle = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={mainStyle}>
      <ChatScreen />
    </div>
  )
}

export default App