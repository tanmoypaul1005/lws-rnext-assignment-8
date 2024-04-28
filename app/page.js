import Image from "next/image";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

export default function Home() {
  return (
    <div>
      <body>
        <TopBar />

        <main>
          <section className="container">
            <div
              style={{
                backgroundImage: "url('./assets/images/cover.png')",
                padding: "1rem",
                borderRadius: "1rem",
                minHeight: "450px",
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "repeat(12, 1fr)",
              }}
            >
              <div style={{ gridColumn: "span 12/span 6" }}>
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: "3rem",
                    color: "white",
                  }}
                >
                  Choose from thousands of recipes
                </h1>
                <p style={{ color: "white", margin: "1rem 0" }}>
                  Appropriately integrate technically sound value with scalable
                  infomediaries negotiate sustainable strategic theme areas
                </p>
              </div>
            </div>
          </section>

          <SideBar />
        </main>
      </body>
    </div>
  );
}
