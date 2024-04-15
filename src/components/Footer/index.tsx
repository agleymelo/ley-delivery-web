export function Footer() {
  return (
    <footer className="border-t md:flex md:justify-between md:p-4">
      <div className="flex flex-col items-center p-4 md:flex-row">
        <span className="text-sm">Ley Delivery.</span>

        <span className="text-sm">&copy; {new Date().getFullYear()} - Todos os direitos reservados</span>
      </div>

      <div className="flex flex-col items-center justify-center p-4 border-t md:flex-row md:border-none">
        <span className="text-secondary-foreground md:mr-1">Feito com ❤️</span>
        <span>
          desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/agleylson-silva/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            agleymelo
          </a>
        </span>
      </div>

      {/* <div className="flex items-center justify-between mx-auto h-16 px-10">
        <span className="text-secondary-foreground">
          &copy; {new Date().getFullYear()} - Todos os direitos reservados
        </span>

        <span className="text-secondary-foreground">
          feito com ❤️ e desenvolvido por{' '}
          <a
            href="https://www.linkedin.com/in/agleylson-silva/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            agleymelo
          </a>
        </span>
      </div> */}
    </footer>
  );
}
