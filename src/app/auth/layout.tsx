export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid h-full grid-cols-2 antialiased">
        <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground"></div>

        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
}
