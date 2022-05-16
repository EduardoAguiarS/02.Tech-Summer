import { useProduct } from "../providers/context";

export const Home = () => {
  const { products } = useProduct();
  return (
    <div>
      <h1>Testando</h1>
    </div>
  );
};
