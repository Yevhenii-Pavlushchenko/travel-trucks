export default function CamperDetailsPage({ params }: { params: { camperId: string } }) {
  const { camperId } = params;

  return (
    <main>
      <h1>Camper Details: {camperId}</h1>
    </main>
  );
}