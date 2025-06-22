import empty from "./empty.png";

export default function EmptyCart() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 208px)",
      }}
    >
      <img
        src={empty}
        alt='empty cart icon'
        style={{ margin: "0 auto", width: 200 }}
      />
      <h1
        style={{
          fontSize: "32px",
          textAlign: "center",
          display: "block",
          paddingLeft: "20px",
          paddingTop: "20px",
        }}
      >
        Cart is empty
      </h1>
    </div>
  );
}
