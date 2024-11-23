import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};
export default async function Page() {
  const session = await auth();
  return (
    <h2 className="font-semibold lg:text-2xl md:text-xl text-accent-400 mb-7">
      Welcome {session.user.name}
    </h2>
  );
}
