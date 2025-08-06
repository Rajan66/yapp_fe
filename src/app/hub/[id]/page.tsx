import { ChatBox, ChatTopbar } from "@/features/channels/components";

const page = () => {
  //TODO: try to prefetch the messages of this room
  return (
    <div className="p-4 h-screen space-y-2 flex flex-col">
      <ChatTopbar roomName="nani room" />
      <ChatBox />
    </div>
  );
};

export default page;
