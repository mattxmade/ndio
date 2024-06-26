import Nav from "../core/Nav";
import Aside from "../core/Aside";
import Header from "../core/Header";

type PageTemplateProps = {
  variant?: "minimal";
} & React.ComponentPropsWithRef<"div">;

const PageTemplate = ({ variant, children }: PageTemplateProps) => (
  <div
    className={`relative flex flex-col md:flex-row gap-1 md:pl-2 md:pr-4 min-h-screen`}
  >
    <Aside className="relative md:sticky top-0 pt-4 h-fit md:h-screen bg-background">
      <Nav className={variant ? "hidden md:flex" : ""} />
    </Aside>
    <section className="flex-auto">
      <Header />
      {children}
    </section>
  </div>
);

export default PageTemplate;
