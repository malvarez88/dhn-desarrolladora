export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <div className="min-h-screen bg-black z-[100] fixed w-full top-0 left-0 right-0 bottom-0"> */}
      {children}
      {/* </div> */}
    </div>
  );
}
