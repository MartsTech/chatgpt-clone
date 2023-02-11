export interface ChatExampleProps {
  message: string;
}

const ChatExample = ({message}: ChatExampleProps) => {
  return (
    <p className="max-w-full rounded-lg bg-gray-700/50 p-4 md:max-w-[300px]">
      {message}
    </p>
  );
};

export default ChatExample;
