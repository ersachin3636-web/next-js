export default async function ProductDetails({
  params
}: { params: { productId: string } }) {
  const { productId } = params;
  return (
    <main>
      <h1>Details about product {productId}</h1>
    </main>
  );
}
