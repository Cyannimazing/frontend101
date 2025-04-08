"use client";

import { useAuth } from "@/hooks/auth.jsx";
import Navigation from "@/app/(app)/Navigation.jsx";
import Loading from "@/app/(app)/Loading.jsx";

const AppLayout = ({ children }) => {
  const { user } = useAuth({ middleware: "auth" });

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation user={user} />

      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
