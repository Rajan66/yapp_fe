import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HubMain = () => {
  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <div className="flex flex-col gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a cave" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="room_a">Room A</SelectItem>
            <SelectItem value="room_b">Room B</SelectItem>
            <SelectItem value="room_c">Room C</SelectItem>
            <SelectItem value="room_d">Room D</SelectItem>
          </SelectContent>
        </Select>
        <Button>Enter the cave</Button>
      </div>
    </div>
  );
};

export default HubMain;
