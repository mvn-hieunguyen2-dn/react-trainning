import MainLayout from "./layouts/main/MainLayout";

function App() {
  return (
    <MainLayout>
      <div
        style={{
          backgroundImage: "url(wall_poro.jpeg)",
          height: 400,
          marginTop: 16,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundSize: "center",
          backgroundPosition: 'center',
          objectFit: "cover",
        }}
      >
        <div
          style={{
            color: "white",
            marginLeft: 20,

          }}
        >
          
        </div>
      </div>
      <div style={{ padding: "16px 0" }}>
        <div className="cards">
          {[1,2,3,4,6,5].map((e, i) => {
            return (
              <div className="card" key={i}>
                <img src="poro.jpeg" alt="image_alt" className="card_image" />
                <div className="btn">Touch</div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
