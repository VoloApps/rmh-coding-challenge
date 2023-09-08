import avatarImg from "assets/images/avatar.png";
import Image from "next/image";

function Avatar() {
  return (
    <Image
      src={avatarImg}
      alt="avatar"
      width={40}
      className="rounded-lg w-10 h-10"
    />
  );
}

export default Avatar;
