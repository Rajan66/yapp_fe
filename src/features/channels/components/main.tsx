"use client";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FriendsSidebar, ChatForm } from "@/features/channels/components";
import { friendsData } from "../constants/friends";

const ChannelMain = () => {
  const [selectedFriendId, setSelectedFriendId] = useState<string | null>(
    friendsData[0]?.id || null,
  );
  const [messages, setMessages] = useState([
    {
      id: "1",
      sender: "Biplav Chor",
      text: "K xa bro",
    },
  ]);

  const handleNewMessage = (newMessageText: string) => {
    if (selectedFriendId) {
      // FIXME: change this
      // @ts-ignore
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: newMessageText, sender: "user" },
      ]);
      // In a real app, you'd also update chatMessagesData or send to backend
    }
  };

  const selectedFriend = friendsData.find((f) => f.id === selectedFriendId);

  return (
    <div className="flex h-full">
      <FriendsSidebar
        friends={friendsData}
        selectedFriendId={selectedFriendId}
        onSelectFriend={setSelectedFriendId}
      />

      <div className="flex flex-col w-full">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <h2 className="text-xl font-semibold">
            {selectedFriend
              ? `Chat with ${selectedFriend.name}`
              : "Select a friend"}
          </h2>
        </header>
        <div className="flex flex-col flex-1 p-4">
          <Card className="flex flex-col flex-1">
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length > 0 ? (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`${
                        message.sender === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100"
                      } p-3 rounded-lg max-w-[70%]`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">
                  No messages yet. Start a conversation!
                </div>
              )}
            </CardContent>
            <CardFooter className="p-4 border-t">
              <ChatForm onSendMessage={handleNewMessage} />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChannelMain;
