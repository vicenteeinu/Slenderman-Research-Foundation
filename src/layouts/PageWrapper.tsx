import forestImg from "../assets/images/background.png";

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed flex flex-col"
      style={{ backgroundImage: `url(${forestImg})` }}
    >
      <div className="min-h-screen w-full bg-black/60 flex flex-col">
        {children}
      </div>
    </div>
  );
}