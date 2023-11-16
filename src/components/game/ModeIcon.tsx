interface ModelIconProps {
  model: any;
  className?: string;
}

export default function ModelIcon({ model, className }: ModelIconProps) {
  className ?? "w-10 h-10";
  const _model = model;
  return <_model className={className} />;
}
