export function Footer() {
  return (
    <footer className="border-t">
      <div className="flex items-center justify-between mx-auto max-w-6xl h-16">
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
      </div>
    </footer>
  );
}
