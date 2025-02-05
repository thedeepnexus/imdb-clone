import Link from "next/link";
import React from "react";

// MenuItem({ title, address, Icon }
export default function MenuItem({
  title,
  address,
  Icon,
}: Readonly<{
  title: string;
  address: string;
  Icon: React.ComponentType<{ className?: string }>;
}>) {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}
