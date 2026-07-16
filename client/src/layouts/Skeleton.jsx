import Products from "../components/skeleton/Products";
import MenuBar from "../components/skeleton/MenuBar";
export default function Skeleton() {

  return (
    <>
      <MenuBar/>
      <Products count={20}/>
    </>
  );
}