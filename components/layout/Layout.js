import MainNavigation from "./MainNavigation";

// Define layout of the application
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="items-center">{props.children}</main>
    </div>
  );
}

export default Layout;
