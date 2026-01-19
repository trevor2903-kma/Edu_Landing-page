import { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  errorMessage?: string | null;
}

export default function PasswordInput({
  value,
  onChange,
  onBlur,
  errorMessage,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const hasError = !!errorMessage;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="password" className="text-sm font-medium text-[#344054]">
        Mật khẩu
      </label>
      <div className="relative">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="Điền mật khẩu"
          className={`h-11 w-full rounded-lg border px-3.5 py-2.5 text-[#101828] shadow-sm outline-none placeholder:text-[#667085] focus:ring-1 ${
            hasError
              ? "border-[#FDA29B] focus:border-[#FDA29B] focus:ring-[#FDA29B]"
              : "border-[#D0D5DD] focus:border-[#0072BC] focus:ring-[#0072BC]"
          }`}
        />
        {/* Show Error Icon if Error, otherwise show Toggle Logic */}
        {hasError ? (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F04438]">
            <AlertCircle size={20} />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#98A2B3] hover:text-[#475467]"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {hasError && <p className="text-sm text-[#D92D20]">{errorMessage}</p>}
    </div>
  );
}
