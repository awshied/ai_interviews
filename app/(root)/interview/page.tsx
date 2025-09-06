import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const page = async () => {
  const user = await getCurrentUser();

  if (!user || !user.id || !user.name) {
    return <p>Unauthorized or user data incomplete.</p>;
  }

  return (
    <>
      <h3>Interview Generation</h3>

      <Agent userName={user.name} userId={user.id} type="generate" />
    </>
  );
};

export default page;
