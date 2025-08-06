import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ChatForm from "./chat-form";

const ChatBox = ({ messages }: { messages?: any }) => {
  return (
    <Card className="flex flex-col flex-1">
      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages?.length > 0 ? (
          messages?.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
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
            Say hi to this chigga and start a converstation.
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 border-t">
        <ChatForm />
      </CardFooter>
    </Card>
  );
};

export default ChatBox;
