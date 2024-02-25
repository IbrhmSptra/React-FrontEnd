import CardFood from "../components/CardFood";
import frenchtoast from "../assets/img/Food/frenchtoast.png";
import rendang from "../assets/img/Food/rendang.png";

const Rekomendasi = () => {
  return (
    <div className="mt-8">
      <h1 className="font-medium text-lg xl:text-xl">Rekomendasi</h1>
      <div className="mt-2 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-4">
        <CardFood src={frenchtoast} nama="French Toast" />
        <CardFood src={rendang} nama="Rendang" />
        <CardFood src={frenchtoast} nama="French Toast" />
        <CardFood src={rendang} nama="Rendang" />
        <CardFood src={frenchtoast} nama="French Toast" />
        <CardFood src={rendang} nama="Rendang" />
        <CardFood src={frenchtoast} nama="French Toast" />
        <CardFood src={rendang} nama="Rendang" />
        <CardFood src={frenchtoast} nama="French Toast" />
        <CardFood src={rendang} nama="Rendang" />
        <CardFood src={frenchtoast} nama="French Toast" />
        <CardFood src={rendang} nama="Rendang" />
      </div>
    </div>
  );
};

export default Rekomendasi;
