import AuthProvider from "@/providers/auth/AuthProvider";
import SoundProvider from "@/providers/game/SoundProvider";

interface ProvidersProps {
  children?: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <SoundProvider>{children}</SoundProvider>
    </AuthProvider>
  );
}
