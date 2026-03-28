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

  const imageStyle = {
    width: "100%",
    borderRadius: "18px",
    display: "block",
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
            <a href="#kampanyalar" style={{ textDecoration: "none", color: "#1f2937" }}>
              Kampanyalar
            </a>
            <a href="#pizza" style={{ textDecoration: "none", color: "#1f2937" }}>
              Pizza
            </a>
            <a href="#mekan" style={{ textDecoration: "none", color: "#1f2937" }}>
              Mekan
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
          padding: "40px 20px 30px 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "24px",
            alignItems: "center",
            background: "linear-gradient(135deg, #ffffff, #eef7f1)",
            borderRadius: "28px",
            padding: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <div>
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
                href="https://wa.me/905494101022"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...buttonStyle,
                  background: "#2f855a",
                  color: "#ffffff",
                }}
              >
                Sipariş Ver
              </a>

              <a
                href="https://maps.app.goo.gl/QiJZBebWSmaWM6Dc8"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...buttonStyle,
                  background: "#ffffff",
                  color: "#1f2937",
                  border: "1px solid #d1d5db",
                }}
              >
                Yol Tarifi Al
              </a>
            </div>
          </div>

          <div>
            <img
              src="/images/pizza1.png"
              alt="Olivento Pizza"
              style={imageStyle}
            />
          </div>
        </div>
      </section>

      <section
        id="kampanyalar"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "10px 20px 30px 20px",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Kampanyalar & Haberler</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>🍕 Kampanya</h3>
            <p style={{ lineHeight: "1.7" }}>
              Güncel kampanyalarımız çok yakında burada yer alacak.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>🍷 Haber</h3>
            <p style={{ lineHeight: "1.7" }}>
              Menümüzde bira ve şarap seçeneklerimiz de bulunmaktadır.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>📣 Duyuru</h3>
            <p style={{ lineHeight: "1.7" }}>
              Yeni ürünlerimiz ve özel duyurularımız için bu alan kullanılacak.
            </p>
          </div>
        </div>
      </section>

      <section
        id="pizza"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Pizza</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div>
            <img src="/images/pizza1.png" alt="Pizza" style={imageStyle} />
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>İmza Lezzetlerimiz</h3>
            <p style={{ lineHeight: "1.8" }}>
              İnce hamur, dengeli malzeme kullanımı ve sıcak servis anlayışıyla
              Olivento Pizza; Ayvalık’ta hızlı, lezzetli ve karakterli bir pizza
              deneyimi sunar.
            </p>
            <p style={{ lineHeight: "1.8" }}>
              Menü bölümüne çok yakında pizza çeşitleri, içerikler ve fiyatlar
              detaylı olarak eklenecek.
            </p>
          </div>
        </div>
      </section>

      <section
        id="mekan"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Mekanımız</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Sıcak ve samimi ortam</h3>
            <p style={{ lineHeight: "1.8" }}>
              Olivento Pizza’da hızlı servis, sıcak atmosfer ve Ayvalık ruhunu
              taşıyan sade bir mekan anlayışı vardır.
            </p>
          </div>

          <div>
            <img src="/images/mekan1.jpeg" alt="Olivento Mekan" style={imageStyle} />
          </div>
        </div>
      </section>

      <section
        id="pansiyon"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px 20px 30px 20px",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Olivento Pansiyon</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div>
            <img src="/images/oda1.jpeg" alt="Olivento Pansiyon Oda" style={imageStyle} />
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Sade ve huzurlu konaklama</h3>
            <p style={{ lineHeight: "1.8" }}>
              Ayvalık’ta merkezi konumda, temiz, sade ve huzurlu bir konaklama
              deneyimi sunuyoruz.
            </p>
            <p style={{ lineHeight: "1.8" }}>
              Oda detayları ve diğer görseller çok yakında bu bölümde yer alacak.
            </p>
          </div>
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
                marginBottom: "14px",
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