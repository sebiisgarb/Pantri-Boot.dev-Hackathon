import { useEffect, useState } from "react";
import { Eye, EyeOff, Mail, Key } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  onToggleForm: () => void;
}

export default function RegisterForm({ onToggleForm }: Props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [email, setEmail] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  useEffect(() => {
    if (confirmPassword === "") return;
    setPasswordMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  return (
    <AnimatePresence>
      <motion.section
        key="register"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6"
      >
        <div className="w-full max-w-sm sm:max-w-md px-6 py-10 bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30">
          <h1
            className="text-4xl sm:text-5xl font-bold text-center text-purple-700 drop-shadow-sm"
            style={{ fontFamily: '"Bitcount Prop Double", sans-serif' }}
          >
            Welcome to Pantri!
          </h1>

          <p className="text-center text-gray-600 mt-2 mb-8 text-sm sm:text-base">
            Create an account to organize your pantry and cook smarter.
          </p>

          <form className="flex flex-col gap-5">
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400"
                size={18}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full py-2 rounded-lg bg-white/60 focus:bg-white/90 border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 placeholder-gray-500 outline-none"
              />
            </div>

            <div className="relative">
              <Key
                className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400"
                size={18}
              />
              {showPwd ? (
                <EyeOff
                  onClick={() => setShowPwd(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-purple-400"
                  size={18}
                />
              ) : (
                <Eye
                  onClick={() => setShowPwd(true)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-purple-400"
                  size={18}
                />
              )}
              <input
                type={showPwd ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10 w-full py-2 pl-10 rounded-lg bg-white/60 focus:bg-white/90 border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 placeholder-gray-500 outline-none"
              />
            </div>

            <div>
              <div className="relative">
                <Key
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400"
                  size={18}
                />
                {showPwd ? (
                  <EyeOff
                    onClick={() => setShowPwd(false)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-purple-400"
                    size={18}
                  />
                ) : (
                  <Eye
                    onClick={() => setShowPwd(true)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-purple-400"
                    size={18}
                  />
                )}
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pr-10 w-full py-2 pl-10 rounded-lg bg-white/60 focus:bg-white/90 border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 placeholder-gray-500 outline-none"
                />
              </div>
            </div>

            {!passwordMatch && confirmPassword && (
              <p className="text-red-500 text-sm">Passwords do not match!</p>
            )}

            <button
              type="submit"
              className="py-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 active:scale-[.98] text-white font-semibold shadow-md transition"
            >
              Create account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={onToggleForm}
              className="text-purple-600 hover:underline"
            >
              Log in!
            </button>
          </p>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
