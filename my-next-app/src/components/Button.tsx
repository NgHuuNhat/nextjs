// src/components/Button.tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

export default function Button(
  { label, onClick }: ButtonProps
) {
  return (
    <button
      onClick={onClick}
      style={{ padding: "0.5rem 1rem", margin: "1rem 0" }} className="cursor-pointer bg-red-500 rounded-full"
    >
      {label}
    </button>
  );
}
