export default function Home() {
  const cardStyle = {
    background: "#ffffff",
    borderRadius: "22px",
    padding: "28px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.07)",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "bold",
    marginRight: "12px",
    marginTop: "10px",
  };

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f8f7f2",
        color: "#1f2937",
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "18px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>
            <div style={{ fontSize: "28px", fontWeight: "bold" }}>OLIVENTO</div>
            <div style={{ color: "#2f855a", fontSize: "14px" }}>
              Pizza & Pansiyon
            </div>
          </div>

          <nav style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
            <a href="#anasayfa" style={{ textDecoration: "none", color: "#1f2937" }}>
              Ana Sayfa
            </a>
            <a href="#pizza" style={{ textDecoration: "none", color: "#1f2937" }}>
              Pizza
            </a>
            <a href="#pansiyon" style={{ textDecoration: "none", color: "#1f2937" }}>
              Pansiyon
            </a>
            <a href="#iletisim" style={{ textDecoration: "none", color: "#1f2937" }}>
              İletişim
            </a>
          </nav>
        </div>
      </header>

      <section
        id="anasayfa"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 20px 30px 20px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #ffffff, #eef7f1)",
            borderRadius: "28px",
            padding: "55px 30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <p
            style={{
              color: "#2f855a",
              fontWeight: "bold",
              letterSpacing: "1px",
              marginBottom: "12px",
            }}
          >
            AYVALIK’TA PIZZA & PANSİYON
          </p>

          <h1 style={{ fontSize: "56px", margin: "0 0 10px 0" }}>OLIVENTO</h1>

          <h2 style={{ color: "#2f855a", fontSize: "30px", marginTop: 0 }}>
            Bi Dilim Ayvalık
          </h2>

          <p
            style={{
              maxWidth: "720px",
              lineHeight: "1.8",
              fontSize: "18px",
              marginTop: "20px",
            }}
          >
            Olivento, Ayvalık’ın rüzgarını ve zeytinini bir araya getiren bir
            markadır. Aynı çatı altında hem sıcak pizza deneyimi hem de sade ve
            huzurlu bir pansiyon atmosferi sunar.
          </p>

          <div style={{ marginTop: "24px" }}>
            <a
              href="#pizza"
              style={{
                ...buttonStyle,
                background: "#2f855a",
                color: "#ffffff",
              }}
            >
              Menüyü İncele
            </a>

            <a
              href="#pansiyon"
              style={{
                ...buttonStyle,
                background: "#ffffff",
                color: "#1f2937",
                border: "1px solid #d1d5db",
              }}
            >
              Pansiyonu Gör
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "10px 20px 30px 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        <div style={cardStyle}>
          <h3 style={{ marginTop: 0 }}>🍕 İmza Ürün</h3>
          <p style={{ lineHeight: "1.7" }}>45 cm Dev Pizza</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ marginTop: 0 }}>🌿 Marka Dili</h3>
          <p style={{ lineHeight: "1.7" }}>Pizza + Pansiyon + Ayvalık ruhu</p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ marginTop: 0 }}>📍 Konum</h3>
          <p style={{ lineHeight: "1.7" }}>Ayvalık / Balıkesir</p>
        </div>
      </section>

      <section
        id="pizza"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "30px 20px",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Pizza</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Dilim Pizza</h3>
            <p style={{ lineHeight: "1.7" }}>
              İnce hamur ve hızlı servis anlayışıyla öne çıkan seçenek.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Orta Boy Pizza</h3>
            <p style={{ lineHeight: "1.7" }}>
              Paylaşması kolay, dengeli ve ideal porsiyon.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>45 cm Dev Pizza</h3>
            <p style={{ lineHeight: "1.7" }}>
              Kalabalık masalar için güçlü ve dikkat çekici ürün.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Churros & Patates</h3>
            <p style={{ lineHeight: "1.7" }}>
              Menüyü tamamlayan sıcak atıştırmalıklar.
            </p>
          </div>
        </div>
      </section>

      <section
        id="pansiyon"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "30px 20px",
        }}
      >
        <div
          style={{
            ...cardStyle,
            background: "linear-gradient(135deg, #ffffff, #eef6ff)",
          }}
        >
          <h2 style={{ fontSize: "36px", marginTop: 0 }}>Pansiyon</h2>
          <p style={{ lineHeight: "1.8", maxWidth: "760px" }}>
            Ayvalık’ta sade, samimi ve huzurlu bir konaklama deneyimi.
            Olivento Pansiyon; güven veren, sıcak ve kolay ulaşılabilir bir
            yapıda misafirlerini karşılar.
          </p>
        </div>
      </section>

      <section
        id="iletisim"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "30px 20px 60px 20px",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>İletişim</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>📍 Adres</h3>
<a
  href="https://maps.app.goo.gl/QiJZBebWSmaWM6Dc8"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 15px",
    background: "#2f855a",
    color: "white",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold"
  }}
>
  Haritada Aç
</a>
            <p><b>Pizza:</b> Fevzipaşa Vehbibey Mah. Barbaros Cad. No:226 A Ayvalık / Balıkesir</p>
            <p><b>Pansiyon:</b> Fevzipaşa Vehbibey Mah. Barbaros Cad. 10026 Sok. No:2 Ayvalık / Balıkesir</p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>📞 Telefon</h3>

            <p>
              Pizza:{" "}
              <a
                href="tel:+905494101022"
                style={{ color: "#2f855a", textDecoration: "none", fontWeight: "bold" }}
              >
                0549 410 10 22
              </a>
            </p>

            <p>
              Pansiyon:{" "}
              <a
                href="tel:+905494101022"
                style={{ color: "#2f855a", textDecoration: "none", fontWeight: "bold" }}
              >
                0549 410 10 22
              </a>
              {" / "}
              <a
                href="tel:+905521264556"
                style={{ color: "#2f855a", textDecoration: "none", fontWeight: "bold" }}
              >
                0552 126 45 56
              </a>
            </p>

            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/905494101022"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2f855a", textDecoration: "none", fontWeight: "bold" }}
              >
                0549 410 10 22
              </a>
            </p>
          </div>

          <div style={cardStyle}>
           <h3 style={{ marginTop: 0 }}>📸 Instagram</h3>

<p>
  <a
    href="https://www.instagram.com/oliventopizza"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#2f855a", textDecoration: "none", fontWeight: "bold" }}
  >
    @oliventopizza
  </a>
</p>

<p>
  <a
    href="https://www.instagram.com/oliventopansiyon"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#2f855a", textDecoration: "none", fontWeight: "bold" }}
  >
    @oliventopansiyon
  </a>
</p>
          </div>
        </div>
      </section>
    <a
  href="https://wa.me/905494101022"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    padding: "15px 18px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    zIndex: 999,
  }}
>
  WhatsApp
</a>
</main>
  );
}