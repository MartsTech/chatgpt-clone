import type {ChatMessageModel} from '@features/chat/chat-types';
import Image from 'next/image';

export interface ChatMessageProps {
  item: ChatMessageModel;
  image: string;
}

const ChatMessage = ({item, image}: ChatMessageProps) => {
  return (
    <div
      className={`py-5 text-white ${
        typeof item.model !== 'undefined' && 'bg-[#434654]'
      }`}>
      <div className="mx-auto flex max-w-2xl space-x-5 px-10">
        <Image
          src={image}
          width={32}
          height={32}
          className="object-contain"
          alt="avatar"
        />
        <p className="pt-1 text-sm">{item.body}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
