"use client";
export default function UserItem({ name }: any) {
  return (
    <li
      onClick={() => {
        console.log("user clicked", name);
      }}
     className="pl-3"
    >
      { name }
    </li>
  );
}
