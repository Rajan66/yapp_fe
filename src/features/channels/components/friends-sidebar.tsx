"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LuUser } from "react-icons/lu";

interface Friend {
  id: string;
  name: string;
  status: "online" | "offline" | "away";
}

interface FriendsSidebarProps {
  friends: Friend[];
  selectedFriendId: string | null;
  onSelectFriend: (friendId: string) => void;
}

const FriendsSidebar = ({
  friends,
  selectedFriendId,
  onSelectFriend,
}: FriendsSidebarProps) => {
  return (
    <Sidebar side="left" collapsible="none" variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Friends</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {friends.map((friend) => (
                <SidebarMenuItem key={friend.id}>
                  <SidebarMenuButton
                    onClick={() => onSelectFriend(friend.id)}
                    isActive={selectedFriendId === friend.id}
                  >
                    <LuUser className="h-4 w-4" />
                    <span>{friend.name}</span>
                    {/* Optional: Add a status indicator */}
                    <span
                      className={`ml-auto h-2 w-2 rounded-full ${
                        friend.status === "online"
                          ? "bg-green-500"
                          : friend.status === "away"
                            ? "bg-yellow-500"
                            : "bg-gray-400"
                      }`}
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default FriendsSidebar;
