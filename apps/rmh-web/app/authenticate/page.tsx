"use client";

import "@aws-amplify/ui-react/styles.css";
import Head from "next/head";
import { useEffect } from "react";
import { Amplify, Hub } from "aws-amplify";
// TODO Comment Back In
// import awsExports from '../../aws-exports';
import { Authenticator, useTheme, Heading } from "@aws-amplify/ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuthenticated,
  selectPreAuthenticatedRoute,
  setIsAuthenticated,
} from "@/features/authSlice";
import { useRouter } from "next/navigation";

// TODO Comment Back In
// Amplify.configure({
//   ...awsExports
// });

export default function Authenticate() {
  const router = useRouter();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const preAuthenticatedRoute = useSelector(selectPreAuthenticatedRoute);

  useEffect(() => {
    console.log(`isAuthenticated ${isAuthenticated}`);
    console.log(`preAuthenticatedRoute ${preAuthenticatedRoute}`);

    if (isAuthenticated && preAuthenticatedRoute) {
      router.push(preAuthenticatedRoute);
    }
  }, [isAuthenticated, preAuthenticatedRoute]);

  useEffect(() => {
    const listener = async (data: any) => {
      console.log(data.payload.event);
      switch (data.payload.event) {
        case "signIn":
          console.log("signed in");
          dispatch(setIsAuthenticated(true));
          break;
        case "signUp":
          console.log("signed up");
          break;
        case "signOut":
          break;
        default:
          break;
      }
    };

    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);

  // more customization here https://ui.docs.amplify.aws/react/connected-components/authenticator/customization#headers--footers
  const components = {
    SignIn: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Sign in to your account
          </Heading>
        );
      },
    },
    SignUp: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Create an account
          </Heading>
        );
      },
    },
  };

  return (
    <section>
      <Head>
        <title>RMH Authenticate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col p-24 gap-8 w-full">
        <Authenticator components={components} />
      </main>
    </section>
  );
}
