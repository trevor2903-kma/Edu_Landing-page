import { AlertCircle } from "lucide-react";

interface EmailInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  errorMessage?: string | null;
}

export default function EmailInput({
  value,
  onChange,
  onBlur,
  errorMessage,
}: EmailInputProps) {
  const hasError = !!errorMessage;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="email" className="text-sm font-medium text-[#344054]">
        Email
      </label>
      <div className="relative">
        <input
          id="email"
          type="email"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="ten@email.com"
          className={`h-11 w-full rounded-lg border px-3.5 py-2.5 text-[#101828] shadow-sm outline-none placeholder:text-[#667085] focus:ring-1 ${
            hasError
              ? "border-[#FDA29B] focus:border-[#FDA29B] focus:ring-[#FDA29B]"
              : "border-[#D0D5DD] focus:border-[#0072BC] focus:ring-[#0072BC]"
          }`}
        />
        {hasError && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F04438]">
            <AlertCircle size={20} />
          </div>
        )}
      </div>
      {hasError && <p className="text-sm text-[#D92D20]">{errorMessage}</p>}
    </div>
  );
}
