import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className="items-center">{props.children}</main>
    </div>
  );
}

export default Layout;
