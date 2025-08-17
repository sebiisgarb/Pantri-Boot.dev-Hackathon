const Background = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-8 left-6 w-52 h-52 md:w-80 md:h-80 rounded-full
                     mix-blend-overlay filter blur-2xl opacity-70 animate-blob"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #d946ef 0%, #7e22ce 70%)",
          }}
        />
        <div
          className="absolute -bottom-16 left-1/2 w-60 h-60 md:w-[22rem] md:h-[22rem] rounded-full
                     -translate-x-1/2 mix-blend-overlay filter blur-2xl opacity-60 animate-blob delay-2s"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, #c084fc 0%, #9333ea 70%)",
          }}
        />
        <div
          className="absolute top-20 right-4 w-44 h-44 md:w-72 md:h-72 rounded-full
                     mix-blend-overlay filter blur-2xl opacity-60 animate-blob delay-4s"
          style={{
            background:
              "radial-gradient(circle at 40% 60%, #818cf8 0%, #6d28d9 70%)",
          }}
        />
      </div>
    </>
  );
};

export default Background;
