const BackgroundCircles = () => {
  return (
    <div className="relative">
      {/* Círculo verde claro grande */}
      <div
        className="absolute bg-cyan-100 opacity-50 rounded-full"
        style={{
          width: "800px",
          height: "800px",
          top: "-370px",
          left: "-400px",
        }}
      />

      {/* Círculo rosado */}
      <div
        className="absolute bg-indigo-800 opacity-70 rounded-full"
        style={{
          width: "200px",
          height: "200px",
          bottom: "-400px",
          right: "-50px",
        }}
      />

      {/* Puedes agregar más círculos aquí si es necesario */}
    </div>
  );
};

export default BackgroundCircles;
