import CapabilitiesIcon from '@heroicons/react/24/outline/BoltIcon';
import LimitationsIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon';
import ExamplesIcon from '@heroicons/react/24/outline/SunIcon';

const ChatWelcomePage = () => {
  return (
    <div className="bg-ue flex h-full flex-col items-center justify-center px-2">
      <h1 className="mb-20 text-5xl font-bold">ChatGPT Clone</h1>

      <div className="flex space-x-2 text-center">
        <div className="">
          <div className="mb-5 flex flex-col items-center justify-center">
            <ExamplesIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="max-w-[300px] rounded-lg bg-gray-700/50 p-4">
              Explain quantum computing in simple terms
            </p>
            <p className="max-w-[300px] rounded-lg bg-gray-700/50 p-4">
              Got any creative ideas for a 10 year olds birthday?
            </p>
            <p className="max-w-[300px] rounded-lg bg-gray-700/50 p-4">
              How do I make an HTTP request in Javascript?
            </p>
          </div>
        </div>

        <div className="">
          <div className="mb-5 flex flex-col items-center justify-center">
            <CapabilitiesIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="max-w-[300px] rounded-lg bg-gray-700/50 p-4">
              Remembers what user said earlier in the conversation
            </p>
            <p className="max-w-[300px] rounded-lg bg-gray-700/50 p-4">
              Allows user to provide follow-up corrections
            </p>
            <p className="max-w-[300px] rounded-lg bg-gray-700/50 p-4">
              Trained to decline inappropriate requests
            </p>
          </div>
        </div>

        <div className="">
          <div className="mb-5 flex flex-col items-center justify-center">
            <LimitationsIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="max-w-[300px] rounded-lg bg-gray-700/50 p-4">
              May occasionally generate incorrect information
            </p>
            <p className="max-w-[300px] rounded-lg bg-gray-700/50 p-4">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="max-w-[300px] rounded-lg bg-gray-700/50 p-4">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWelcomePage;
