import SoundProvider from "@/providers/game/SoundProvider";
import QueryProvider from "@/providers/query-provider/QueryProvider";

interface ProvidersProps {
  children?: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      <SoundProvider>{children}</SoundProvider>
    </QueryProvider>
  );
}
