// import React from "react";
// import Image from "next/image";
// import { signIn } from "next-auth/react";

// const Login = () => {
  
//   return (
//     <div className="grid place-items-center">
            
//     <Image src="https://links.papareact.com/t4i"
//     height={400}
//     width={400}
//     objectFit="contain"
//     alt="/"
//     />
//     <h1 
//     onClick={signIn}
//     className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer ">Login with Facebook</h1>
// </div>
// )
  
// };

// export default Login;



// import React from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
// const login = () => {
//   const { data: session } = useSession();

//   if (session) {
//     return <div> Welcome {session.user.name}
//     <button onClick={()=>signOut()}>SignOut</button>
//     </div>;
//   } else {
//     return (
//       <div>
//         <p>You are not Signed In</p>
//         <button onClick={() => signIn()}>Sign In</button>
//       </div>
//     );
//   }
// };

// export default login;
