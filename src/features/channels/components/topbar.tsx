const ChatTopbar = ({ roomName }: { roomName: string }) => {
  return (
    <div className="w-full bg-neutral-800 border-b rounded-xl">
      <div className="flex p-2 justify-center items-center">
        <h2>{roomName}</h2>
      </div>
    </div>
  );
};

export default ChatTopbar;
