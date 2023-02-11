import CapabilitiesIcon from '@heroicons/react/24/outline/BoltIcon';
import ExamplesIcon from '@heroicons/react/24/outline/SunIcon';
import ChatExamples from './ChatExamples';

const ChatEmptyPage = () => {
  return (
    <div className="bg-ue flex h-full flex-col items-center justify-center px-2">
      <h1 className="my-6 text-3xl font-bold md:mb-20 md:text-5xl">
        ChatGPT Clone
      </h1>
      <div className="flex flex-col space-x-2 text-center md:flex-row">
        <ChatExamples
          title="Examples"
          icon={<ExamplesIcon className="h-8 w-8" />}
          messages={[
            'Explain quantum computing in simple terms',
            'Got any creative ideas for a 10 year olds birthday?',
            'How do I make an HTTP request in Javascript?',
          ]}
        />
        <ChatExamples
          title="Capabilities"
          icon={<CapabilitiesIcon className="h-8 w-8" />}
          messages={[
            'Remembers what user said earlier in the conversation',
            'Allows user to provide follow-up corrections',
            'Trained to decline inappropriate requests',
          ]}
        />
        <ChatExamples
          title="Limitations"
          icon={<CapabilitiesIcon className="h-8 w-8" />}
          messages={[
            'May occasionally generate incorrect information',
            'May occasionally produce harmful instructions or biased content',
            'Limited knowledge of world and events after 2021',
          ]}
        />
      </div>
    </div>
  );
};

export default ChatEmptyPage;
