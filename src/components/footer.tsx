export default function Footer() {
  return (
    <footer className="flex justify-center gap-1 text-sm text-gray-700">
      <p>&copy; {new Date().getFullYear()}</p>
      <a
        href="https://github.com/Dimterion/next-app"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Trust Issue
      </a>
      <a
        href="https://www.dimterion.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        by Dimterion
      </a>
    </footer>
  );
}
