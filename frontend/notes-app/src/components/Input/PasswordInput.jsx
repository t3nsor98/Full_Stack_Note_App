import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function PasswordInput({value, onChange, placeholder}) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 mb-3 rounded">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent py-3 mr-3 outline-none"
      />
      {isShowPassword ? (
        <FaRegEye
          size={22}
          onClick={() => toggleShowPassword()}
          className="cursor-pointer text-primary"
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          onClick={() => toggleShowPassword()}
          className="cursor-pointer text-slate-400"
        />
      )}
    </div>
  );
}
