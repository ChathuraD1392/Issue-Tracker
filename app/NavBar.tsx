"use client";

import { Skeleton } from "@/app/components";
import { Avatar, Box, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];

  console.log(session);
  return (
    <div>
      <nav className="mb-5 border-b p-5 border-green-400">
        <Flex direction="row" gap="5" justify="between">
          <Flex gap="5" align="center">
            <Link
              href="/"
              className={`${
                currentPath === "/" ? "text-green-400" : "text-green-600"
              } text-lg`}
            >
              {<AiFillBug />}
            </Link>
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${
                  currentPath === link.href
                    ? "text-green-400 underline underline-offset-8"
                    : "text-green-600"
                } transition-colors text-lg font-bold hover:text-green-400`}
              >
                {link.label}
              </Link>
            ))}
          </Flex>
          <Box>
            {status === "loading" && <Skeleton />}
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    className="cursor-pointer"
                    src={session.user?.image!}
                    fallback="?"
                    radius="full"
                  ></Avatar>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text size="2">{session.user?.email}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>
                    <Link href="/api/auth/signout">Log Out</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}

            {status === "unauthenticated" && (
              <Link
                href="/api/auth/signin"
                className="hover:text-green-400 text-green-600 font-bold text-lg"
              >
                Log In
              </Link>
            )}
          </Box>
        </Flex>
      </nav>
    </div>
  );
};

export default NavBar;
