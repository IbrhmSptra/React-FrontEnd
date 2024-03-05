import { Link } from "react-router-dom";
import iconcart from "../assets/img/cart-icon.png"

const IngridientsButtonOrder = () => {
  return (
    <Link to="/DetailTransaksi">
        <div className="inline-flex mt-4 justify-around p-2 w-1/2 bg-primary rounded-lg sm:mx-auto">
        <img
          alt="shoppingcart"
          src={iconcart}
        />
        <p
          className="font-bold"
          href="#"
        >
          Pesan Bahan
        </p>
      </div>
    </Link>
  );
};

export default IngridientsButtonOrder;