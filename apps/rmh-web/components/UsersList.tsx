import { User } from "@/app/pt-portal/models";
import Image from "next/image";
import { setUsers } from "@/features/usersSlice";

const UserItem = ({ user }: { user: User }) => {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-[#EFF3FC] transition-all duration-250">
      <div className="flex items-center gap-4">
        <Image
          src="/profile-icon.svg"
          width={40}
          height={40}
          alt="profile icon"
        />
        <div>{user.patientName}</div>
      </div>
      <button
        className="hover:opacity-50 duration-100"
        onClick={() => console.log("opens chat window")}
      >
        <Image src="/chat-icon.svg" width={24} height={24} alt="chat icon" />
      </button>
    </div>
  );
};

const UsersList = ({ users }: { users: User[] }) => (
  <>
    {users.map((user) => (
      <UserItem key={JSON.stringify(user)} user={user} />
    ))}
  </>
);

export default UsersList;
