export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex md:grid h-full md:grid-cols-2 antialiased">
        <div className="hidden md:flex md:h-full md:flex-col md:justify-between md:border-r md:border-foreground/5 md:bg-muted md:p-10 md:text-muted-foreground"></div>

        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
}
