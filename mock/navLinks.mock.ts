interface NavLink {
  title: string;
  url: string;
  blank: boolean;
}

const frontLinks: NavLink[] = [
  {
    title: "Home",
    url: "/",
    blank: false,
  },
  {
    title: "About Us",
    url: "/about",
    blank: false,
  },
  {
    title: "FAQ",
    url: "/",
    blank: false,
  },
  {
    title: "Contact",
    url: "/",
    blank: false,
  },
  ,
  {
    title: "Log In",
    url: "/",
    blank: false,
  },
  ,
  {
    title: "Get Started",
    url: "/",
    blank: false,
  },
];

export const navLinks = {
  frontLinks,
};
