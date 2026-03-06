import { Link } from "@tanstack/react-router";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌟</span>
            <div>
              <p className="font-display font-bold text-lg bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Healthy Living
              </p>
              <p className="text-sm text-muted-foreground">
                Your guide to a happy, healthy life! 🌈
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500">
            <Link
              to="/"
              className="hover:text-green-600 transition-colors no-underline"
            >
              Home
            </Link>
            <Link
              to="/food"
              className="hover:text-orange-500 transition-colors no-underline"
            >
              Healthy Food
            </Link>
            <Link
              to="/exercise"
              className="hover:text-blue-500 transition-colors no-underline"
            >
              Exercise
            </Link>
            <Link
              to="/mental"
              className="hover:text-purple-500 transition-colors no-underline"
            >
              Mental Well-Being
            </Link>
            <Link
              to="/routine"
              className="hover:text-yellow-600 transition-colors no-underline"
            >
              Daily Routine
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {year}. Built with <span className="text-red-500">❤️</span> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
