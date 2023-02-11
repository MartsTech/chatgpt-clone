import ChatExample from './ChatExample';

export interface ChatExamplesProps {
  title: string;
  icon: React.ReactElement;
  messages: string[];
}

const ChatExamples = ({title, icon, messages}: ChatExamplesProps) => {
  return (
    <div>
      <div className="mb-5 flex flex-col items-center justify-center">
        {icon}
        <h2>{title}</h2>
      </div>
      <div className="space-y-2">
        {messages.map(message => (
          <ChatExample message={message} />
        ))}
      </div>
    </div>
  );
};

export default ChatExamples;
