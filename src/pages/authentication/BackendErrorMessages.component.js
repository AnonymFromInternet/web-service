const BackendErrorMessagesComponent = ({ backendErrors }) => {
  let messages = [];
  for (let name in backendErrors) {
    messages.push(`${name} ${backendErrors[name].join(" ")}`);
  }
  console.log(messages);
  return (
    <ul className="error-messages">
      {messages.map((message) => {
        return <li key={message}>{message}</li>;
      })}
    </ul>
  );
};
export default BackendErrorMessagesComponent;
