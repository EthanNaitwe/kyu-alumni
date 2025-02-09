
import { signIn, signOut, auth } from "@/auth"

export default async function AuthSignIn() {
  const session = await auth();

  const userAvatar = session?.user ? <div>
    <img src={session.user.image} alt="User Avatar" />
  </div> : null;
  const authBtn = !session?.user ? <button  type="submit">
    Signin with Google
  </button> : <button  type="submit">
    Signout
  </button>;

  return (
    <>
      {userAvatar}
      <form
        action={async () => {
          "use server"
          !session?.user ? await signIn('google') : await signOut()
        }}
      >
        {authBtn}
      </form></>
  )
}

// On Allan's Sis & how she called me yesterday.
