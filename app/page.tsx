export default function Home() {
  return (
    <div className="flex max-w-5xl flex-col gap-16">
      <div className="flex flex-col items-center">
        <div className="h-[250px] w-[250px] rounded-xl bg-slate-200"></div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <p>Hello world !</p>
        <h1 className="text-3xl font-medium">I’m Patiphan Arphorn</h1>
        <p>
          Im a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible
        </p>
      </div>
      
      <div className="h-[2000px]"></div>

    </div>
  );
}
