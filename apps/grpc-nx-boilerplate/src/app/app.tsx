import { chatServiceClient } from './grpc-clients/chat-service.client';

export function App() {
  const handleSendMessage = () => {
    chatServiceClient.sendMsg({
      from: 'John Doe',
      msg: 'It is just a random message',
      time: new Date().toISOString(),
    });
  };

  return (
    <div>
      <p>Its just a demonstration of a single call</p>
      <button onClick={handleSendMessage}>Send message</button>
    </div>
  );
}

export default App;
