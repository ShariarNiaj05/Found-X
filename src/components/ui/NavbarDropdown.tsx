"use client";
import { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthService";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";

export default function NavbarDropdown() {
  const router = useRouter();
  const { user, setIsLoading: setUserLoading } = useUser();
  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const handleLogout = () => {
    setUserLoading(true);
    logout();
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          className="cursor-pointer"
          // name="Joe"
          src={user?.profilePhoto}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleNavigation("/profile")}>
          Profile
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/profile/settings")}>
          Settings
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/profile/create-post")}>
          Create Post
        </DropdownItem>

        <DropdownItem
          key="delete"
          onClick={() => handleLogout()}
          className="text-danger"
          color="danger"
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
