interface LoadingComponentProps {
  w?: number;
  h?: number;
}

export default function LoadingComponent({ w, h }: LoadingComponentProps) {
  w = w || 10;
  h = h || 10;
  return (
    <div className="flex items-center justify-center m-10">
      <div
        className={`animate-spin rounded-full border-t-4 border-amber-400 border-solid h-${h} w-${w}`}
      />
    </div>
  );
}
