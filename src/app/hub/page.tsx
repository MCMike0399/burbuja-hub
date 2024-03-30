import prisma from "@/utils/db";

async function getUsers() {
   const users = await prisma.user.findMany();
   return users;
}

export default async function Hub() {
   const users = await getUsers();
   return (
      <div>
         {users.map((user) => (
            <div key={user.id}>{user.name}</div>
         ))}
      </div>
   );
}
