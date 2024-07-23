

export default function Header() {
  return (
    <header className="container mx-auto max-w-[720px] pt-12 px-4 md:px-0 space-y-8">
      <div className="bg-white w-fit h-28 aspect-square flex justify-center items-center rounded-2xl shadow-lg">
        <img src="/public/mvlu_logo.png" alt="MVLU Logo" />
      </div>
      <div>
        <h2 className="text-3xl leading-8 font-semibold">
          Welcome to
          <span className="inline-block md:pl-2 text-transparent font-bold bg-gradient-to-r from-[#29166F] to-[#6E52D8] bg-clip-text">
            MVLU College Bot
          </span>
        </h2>
        <p className="text-3xl font-semibold text-[#666666]">
          How can I help you today?
        </p>
      </div>
    </header>
  );
};