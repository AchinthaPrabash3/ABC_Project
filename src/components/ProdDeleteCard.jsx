/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const ProdDeleteCard = ({ name, price, index, _id, prod, setProd }) => {
  const deleteProd = async () => {
    try {
      const res = await fetch("http://localhost:8080/deleteprod", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: _id,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data);
        return;
      }
      if (data) {
        setProd(prod.filter((_, i) => i != index));
      } else {
        window.alert("somthing went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between rounded border border-gold bg-white px-3 py-2">
      <div className="">
        <div className="flex items-center space-x-3 [&_p]:font-Josefin [&_p]:font-medium [&_p]:capitalize">
          <p>{name}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>

          <p>{price}.Rs</p>
        </div>
        <p className="text-[10px] font-thin">{_id}</p>
      </div>
      <button
        className="rounded bg-red-500 px-2 py-1 font-bold uppercase text-white"
        onClick={() => {
          deleteProd();
        }}
      >
        delete
      </button>
    </div>
  );
};
export default ProdDeleteCard;
