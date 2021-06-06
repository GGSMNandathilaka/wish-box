import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="container">{props.children}</main>
    </div>
  );
}

export default Layout;
