import { personalInfo } from "@/lib/constants/data";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  const { name, title, bio, contact } = personalInfo;

  return (
    <header className="bg-card-bg border-b border-card-border">
      <div className="max-w-6xl space-y-6 mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <ThemeToggle />
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left – Identity */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              {name}
            </h1>
            <p className="text-lg sm:text-xl text-primary font-semibold mt-1">
              {title}
            </p>
            <p className="text-muted mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
              {bio}
            </p>
          </div>

          {/* Right – Contact */}
          <div className="flex flex-col gap-2 text-sm text-muted shrink-0">
            <ContactRow
              icon="email"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />
            <ContactRow
              icon="phone"
              value={contact.phone}
              href={`tel:${contact.phone}`}
            />
            <ContactRow icon="location" value={contact.location} />
            <ContactRow
              icon="linkedin"
              value={contact.linkedin}
              href={`https://${contact.linkedin}`}
            />
            <ContactRow
              icon="github"
              value={contact.github}
              href={`https://${contact.github}`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const ContactRow = ({
  icon,
  value,
  href,
}: {
  icon: string;
  value: string;
  href?: string;
}) => {
  const icons: Record<string, React.ReactNode> = {
    email: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4 text-primary shrink-0"
      >
        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
      </svg>
    ),
    phone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4 text-primary shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    location: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4 text-primary shrink-0"
      >
        <path
          fillRule="evenodd"
          d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    linkedin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4 text-primary shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM6 13.5V8h1.5v5.5H6ZM6.75 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM9 8h1.5v.75c.35-.5.95-.9 1.75-.9 1.5 0 2.25 1 2.25 2.5V13.5H13v-2.75c0-.95-.35-1.5-1.1-1.5-.75 0-1.4.55-1.4 1.5v2.75H9V8Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    github: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4 text-primary shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M10 1.667C5.405 1.667 1.667 5.405 1.667 10c0 3.683 2.388 6.804 5.702 7.908.417.077.569-.181.569-.402 0-.198-.007-.723-.011-1.42-2.32.504-2.81-1.12-2.81-1.12-.38-.963-.926-1.22-.926-1.22-.757-.517.057-.507.057-.507.837.059 1.278.86 1.278.86.744 1.274 1.95.906 2.425.693.075-.539.29-.906.528-1.114-1.852-.21-3.8-.926-3.8-4.122 0-.91.325-1.654.858-2.238-.086-.21-.372-1.058.082-2.206 0 0 .7-.224 2.292.854A7.98 7.98 0 0 1 10 5.89a7.98 7.98 0 0 1 2.09.282c1.59-1.078 2.289-.854 2.289-.854.455 1.148.169 1.996.083 2.206.535.584.857 1.328.857 2.238 0 3.204-1.951 3.909-3.808 4.114.3.258.567.768.567 1.548 0 1.118-.01 2.02-.01 2.294 0 .223.15.483.574.401C16.614 16.8 19 13.68 19 10c0-4.595-3.738-8.333-8.333-8.333Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  const content = (
    <span className="flex items-center gap-2 group">
      {icons[icon]}
      <span
        className={href ? "group-hover:text-primary transition-colors" : ""}
      >
        {value}
      </span>
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default Header;
