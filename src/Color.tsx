export interface ColorProps {
  label: string;
  value: string;
}

export function Color({ label, value }: ColorProps) {
  return (
    <div>
      {label}: #{value}
    </div>
  );
}
