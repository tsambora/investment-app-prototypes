import { useState, useEffect } from "react";

const Celengan = () => {
  const [screen, setScreen] = useState("goals");
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [amount, setAmount] = useState(2500000);
  const [commitment, setCommitment] = useState("medium");
  const [fillAnim, setFillAnim] = useState(0);
  const [consent, setConsent] = useState(false);
  const [activated, setActivated] = useState(false);
  const poketBalance = 350000;

  const goals = [
    { id: "lebaran", icon: "🕌", label: "Lebaran", desc: "Baju baru, mudik, & THR", color: "#16A34A", targetDefault: 2500000 },
    { id: "sekolah", icon: "🎒", label: "Pendidikan Anak", desc: "SPP, seragam, & buku", color: "#0D9488", targetDefault: 3000000 },
    { id: "umrah", icon: "🕋", label: "Umrah", desc: "Tabungan perjalanan suci", color: "#7C3AED", targetDefault: 15000000 },
    { id: "nikah", icon: "💍", label: "Nikah", desc: "Persiapan hari bahagia", color: "#E11D48", targetDefault: 10000000 },
    { id: "darurat", icon: "🛡️", label: "Dana Darurat", desc: "Jaga-jaga kebutuhan mendadak", color: "#D97706", targetDefault: 1000000 },
    { id: "lainnya", icon: "✨", label: "Lainnya", desc: "Tentukan sendiri tujuanmu", color: "#6B7280", targetDefault: 1000000 },
  ];

  const commitments = {
    flexible: { label: "Fleksibel", desc: "Tarik kapan saja", duration: "Bebas", rate: 2.5, ratePct: "2,5%" },
    medium: { label: "3 Bulan", desc: "Bagi hasil lebih tinggi", duration: "3 bulan", rate: 4, ratePct: "4%" },
    full: { label: "12 Bulan", desc: "Bagi hasil paling tinggi", duration: "12 bulan", rate: 5, ratePct: "5%" },
  };

  const amountOptions = [500000, 1000000, 2500000, 5000000];

  const formatRp = (n) => "Rp " + Math.round(n).toLocaleString("id-ID");

  const selectedCommitment = commitments[commitment];
  const durationMonths = commitment === "flexible" ? 12 : commitment === "medium" ? 3 : 12;
  const bagiHasil = Math.round(amount * (selectedCommitment.rate / 100) * (durationMonths / 12));
  const dailyGrowth = Math.round(bagiHasil / (durationMonths * 30));
  const dailySaving = Math.round(amount / (durationMonths * 30));
  const totalAtEnd = amount + bagiHasil;

  const goal = goals.find((g) => g.id === selectedGoal);

  const testimonials = {
    lebaran: { name: "Ibu Yanti", village: "Cianjur", text: "Alhamdulillah, bisa beli baju baru buat anak-anak pas Lebaran dari Celengan!" },
    sekolah: { name: "Ibu Siti", village: "Sukabumi", text: "Anak saya bisa masuk sekolah baru dengan seragam lengkap berkat Celengan Pendidikan." },
    umrah: { name: "Ibu Ratna", village: "Magelang", text: "Pelan-pelan nabung, insya Allah tahun depan bisa berangkat Umrah." },
    nikah: { name: "Ibu Dewi", village: "Bogor", text: "Celengan bantu saya siapkan pernikahan anak tanpa pusing." },
    darurat: { name: "Ibu Lina", village: "Garut", text: "Waktu suami sakit, dana darurat dari Celengan sangat membantu." },
    lainnya: { name: "Ibu Ani", village: "Cirebon", text: "Saya nabung buat beli mesin jahit baru. Sudah tercapai!" },
  };

  useEffect(() => {
    if (screen === "result") {
      setFillAnim(0);
      const timer = setTimeout(() => setFillAnim(1), 100);
      return () => clearTimeout(timer);
    }
  }, [screen, amount, commitment]);

  const fillPct = Math.min(100, (amount / (goal?.targetDefault || 2500000)) * 100);

  return (
    <div style={{
      maxWidth: 390, margin: "0 auto", background: "#FAFDF7", minHeight: "100vh",
      fontFamily: "'Nunito', 'Segoe UI', sans-serif", position: "relative", overflowX: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet" />

      {/* Status bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px 8px", fontSize: 12, fontWeight: 700, color: "#1a1a1a" }}>
        <span>9:41</span>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="#1a1a1a"><rect x="0" y="8" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="7" rx="0.5"/><rect x="9" y="2" width="3" height="10" rx="0.5"/><rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.3"/></svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="#1a1a1a"><path d="M8 3C10.7 3 13.1 4.2 14.7 6.1L16 4.6C14 2.3 11.2 0.8 8 0.8S2 2.3 0 4.6L1.3 6.1C2.9 4.2 5.3 3 8 3Z"/><path d="M8 7C9.7 7 11.2 7.7 12.3 8.9L13.6 7.4C12.1 5.9 10.2 5 8 5S3.9 5.9 2.4 7.4L3.7 8.9C4.8 7.7 6.3 7 8 7Z"/><circle cx="8" cy="11" r="1.5"/></svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="#1a1a1a"><rect x="0" y="1" width="22" height="10" rx="2" stroke="#1a1a1a" strokeWidth="1" fill="none"/><rect x="2" y="3" width="14" height="6" rx="1" fill="#34C759"/><rect x="23" y="4" width="2" height="4" rx="0.5"/></svg>
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: "8px 20px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <div
          onClick={() => { if (screen === "setup") setScreen("goals"); else if (screen === "result") setScreen("setup"); else if (screen === "payment" && !activated) setScreen("result"); }}
          style={{ width: 36, height: 36, borderRadius: 12, background: screen === "goals" ? "transparent" : "#E8F5E9", display: (screen === "goals" || (screen === "payment" && activated)) ? "none" : "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 24 }}>🌱</span>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#14532D", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Celengan
            </div>
          </div>
        </div>
      </div>

      <div style={{ overflowY: "auto", paddingBottom: 110 }}>

        {/* ===== SCREEN 1: GOAL SELECTION ===== */}
        {screen === "goals" && (
          <>
            <div style={{ padding: "0 20px", marginBottom: 24 }}>
              <div style={{
                background: "linear-gradient(145deg, #16A34A 0%, #15803D 50%, #166534 100%)",
                borderRadius: 24, padding: "28px 24px", position: "relative", overflow: "hidden",
              }}>
                <svg style={{ position: "absolute", top: -20, right: -20, opacity: 0.08 }} width="180" height="180" viewBox="0 0 180 180">
                  <circle cx="90" cy="90" r="80" fill="white"/><circle cx="140" cy="40" r="50" fill="white"/>
                </svg>
                <div style={{ fontSize: 26, fontWeight: 800, color: "white", lineHeight: 1.3, fontFamily: "'Playfair Display', Georgia, serif", marginBottom: 8 }}>
                  Kamu mau nabung buat apa?
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.5, fontWeight: 500 }}>
                  Pilih tujuanmu, nanti kami bantu hitungkan berapa yang perlu ditabung tiap hari
                </div>
              </div>
            </div>

            <div style={{ padding: "0 20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {goals.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => { setSelectedGoal(g.id); setAmount(g.targetDefault); setScreen("setup"); }}
                    style={{
                      background: "white", border: "2px solid #E8F5E9", borderRadius: 20,
                      padding: "20px 16px", cursor: "pointer", textAlign: "left",
                      transition: "all 0.15s ease", position: "relative", overflow: "hidden",
                    }}
                  >
                    <div style={{
                      width: 48, height: 48, borderRadius: 16,
                      background: `${g.color}12`, display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: 26, marginBottom: 12,
                    }}>
                      {g.icon}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 4, fontFamily: "'Nunito', sans-serif" }}>
                      {g.label}
                    </div>
                    <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 500, lineHeight: 1.4 }}>
                      {g.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ===== SCREEN 2: SETUP ===== */}
        {screen === "setup" && goal && (
          <>
            {/* Goal header */}
            <div style={{ padding: "0 20px", marginBottom: 20 }}>
              <div style={{
                background: `linear-gradient(145deg, ${goal.color}18 0%, ${goal.color}08 100%)`,
                borderRadius: 20, padding: "18px 20px", display: "flex", alignItems: "center", gap: 14,
                border: `1.5px solid ${goal.color}20`,
              }}>
                <span style={{ fontSize: 36 }}>{goal.icon}</span>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "#1a1a1a" }}>Celengan {goal.label}</div>
                  <div style={{ fontSize: 13, color: "#6B7280", fontWeight: 500 }}>{goal.desc}</div>
                </div>
              </div>
            </div>

            {/* Amount */}
            <div style={{ padding: "0 20px", marginBottom: 20 }}>
              <div style={{ background: "white", borderRadius: 20, padding: "22px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#374151", marginBottom: 6 }}>
                  Mau nabung berapa?
                </div>
                <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 16, fontWeight: 500 }}>
                  Mulai dari Rp 10 ribu aja
                </div>

                <div style={{
                  background: "#F0FDF4", borderRadius: 16, padding: "18px 20px", marginBottom: 16, textAlign: "center",
                  border: "1.5px solid #BBF7D0",
                }}>
                  <div style={{ fontSize: 30, fontWeight: 900, color: "#16A34A", fontFamily: "'Nunito', sans-serif" }}>
                    {formatRp(amount)}
                  </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {amountOptions.map((opt) => (
                    <button key={opt} onClick={() => setAmount(opt)} style={{
                      padding: "10px 16px", borderRadius: 12,
                      border: amount === opt ? "2px solid #16A34A" : "1.5px solid #E5E7EB",
                      background: amount === opt ? "#F0FDF4" : "white",
                      color: amount === opt ? "#16A34A" : "#6B7280",
                      fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "'Nunito', sans-serif",
                    }}>
                      {opt >= 1000000 ? `${(opt / 1000000).toFixed(opt % 1000000 === 0 ? 0 : 1)} jt` : `${opt / 1000}rb`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Commitment spectrum */}
            <div style={{ padding: "0 20px", marginBottom: 20 }}>
              <div style={{ background: "white", borderRadius: 20, padding: "22px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#374151", marginBottom: 6 }}>
                  Berapa lama mau nabung?
                </div>
                <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 16, fontWeight: 500 }}>
                  Makin lama, bagi hasil makin besar
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {Object.entries(commitments).map(([key, c]) => {
                    const isActive = commitment === key;
                    return (
                      <button key={key} onClick={() => setCommitment(key)} style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "16px 18px", borderRadius: 16, cursor: "pointer",
                        border: isActive ? "2px solid #16A34A" : "1.5px solid #E5E7EB",
                        background: isActive ? "#F0FDF4" : "white", textAlign: "left", width: "100%",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <div style={{
                            width: 20, height: 20, borderRadius: "50%",
                            border: isActive ? "6px solid #16A34A" : "2px solid #D1D5DB",
                            background: "white", flexShrink: 0,
                          }} />
                          <div>
                            <div style={{ fontSize: 15, fontWeight: 700, color: isActive ? "#16A34A" : "#374151", fontFamily: "'Nunito', sans-serif" }}>
                              {c.label}
                            </div>
                            <div style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 500 }}>
                              {c.desc}
                            </div>
                          </div>
                        </div>
                        <div style={{
                          background: isActive ? "#16A34A" : "#F3F4F6",
                          borderRadius: 10, padding: "6px 12px",
                          fontSize: 13, fontWeight: 800,
                          color: isActive ? "white" : "#6B7280",
                          fontFamily: "'Nunito', sans-serif",
                        }}>
                          {c.ratePct}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {commitment !== "flexible" && (
                  <div style={{
                    marginTop: 14, background: "#FFFBEB", borderRadius: 12, padding: "12px 16px",
                    fontSize: 13, color: "#92400E", fontWeight: 500, lineHeight: 1.5,
                    border: "1px solid #FDE68A",
                  }}>
                    🛡️ Celengan menjaga uangmu agar siap saat tujuanmu tercapai — sama seperti arisan, ada waktunya tapi pasti dapat
                  </div>
                )}
              </div>
            </div>

            {/* Daily amount preview */}
            <div style={{ padding: "0 20px", marginBottom: 20 }}>
              <div style={{
                background: "linear-gradient(145deg, #16A34A 0%, #15803D 100%)",
                borderRadius: 20, padding: "22px", position: "relative", overflow: "hidden",
              }}>
                <svg style={{ position: "absolute", bottom: -10, right: -10, opacity: 0.06 }} width="120" height="120" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="white"/>
                </svg>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 600, marginBottom: 12, letterSpacing: 0.3 }}>
                  Artinya kamu cuma perlu nabung
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
                  <span style={{ fontSize: 34, fontWeight: 900, color: "white", fontFamily: "'Nunito', sans-serif" }}>
                    {formatRp(dailySaving)}
                  </span>
                  <span style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>/hari</span>
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
                  Kurang dari harga sebungkus mie instan ☺️
                </div>

                <div style={{
                  marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.15)",
                  display: "flex", justifyContent: "space-between",
                }}>
                  <div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>Bagi hasil</div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: "#86EFAC" }}>+{formatRp(bagiHasil)}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>Uangmu jadi</div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: "white" }}>{formatRp(totalAtEnd)}</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ===== SCREEN 3: RESULT/CONFIRMATION ===== */}
        {screen === "result" && goal && (
          <>
            {/* Piggy bank visualization */}
            <div style={{ padding: "0 20px", marginBottom: 20 }}>
              <div style={{
                background: "white", borderRadius: 24, padding: "28px 24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)", textAlign: "center",
              }}>
                {/* Piggy bank filling */}
                <div style={{ position: "relative", width: 140, height: 140, margin: "0 auto 20px" }}>
                  <div style={{
                    width: 140, height: 140, borderRadius: "50%",
                    background: "#F0FDF4", border: "3px solid #BBF7D0",
                    position: "relative", overflow: "hidden",
                  }}>
                    {/* Fill level */}
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      height: `${fillAnim ? fillPct : 0}%`,
                      background: "linear-gradient(180deg, #4ADE80 0%, #16A34A 100%)",
                      transition: "height 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      borderRadius: "0 0 50% 50%",
                    }}>
                      {/* Wave effect */}
                      <svg viewBox="0 0 140 20" style={{ position: "absolute", top: -10, width: "100%" }}>
                        <path d="M0,10 Q35,0 70,10 Q105,20 140,10 L140,20 L0,20 Z" fill="rgba(255,255,255,0.2)" />
                      </svg>
                    </div>
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: 56, zIndex: 2 }}>
                      🌳
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: 14, fontWeight: 600, color: "#6B7280", marginBottom: 4 }}>
                  Celengan {goal.label}
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#16A34A", fontFamily: "'Nunito', sans-serif", marginBottom: 2 }}>
                  {formatRp(amount)}
                </div>
                <div style={{ fontSize: 13, color: "#9CA3AF", fontWeight: 500 }}>
                  Target dalam {commitments[commitment].duration}
                </div>

                {/* Daily growth notification mockup */}
                <div style={{
                  marginTop: 20, background: "#F0FDF4", borderRadius: 14, padding: "14px 18px",
                  border: "1.5px solid #BBF7D0", display: "flex", alignItems: "center", gap: 12,
                  textAlign: "left",
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, background: "#DCFCE7",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0,
                  }}>
                    🌿
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#16A34A" }}>
                      Uangmu tumbuh {formatRp(dailyGrowth)}/hari
                    </div>
                    <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 500 }}>
                      Setiap hari tabunganmu tumbuh seperti tanaman
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings summary */}
            <div style={{ padding: "0 20px", marginBottom: 20 }}>
              <div style={{ background: "white", borderRadius: 20, padding: "22px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#374151", marginBottom: 16 }}>
                  Ringkasan Celenganmu
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { label: "Tujuan", value: `Celengan ${goal.label}`, icon: goal.icon },
                    { label: "Jumlah nabung", value: formatRp(amount), icon: "💰" },
                    { label: "Nabung per hari", value: `~${formatRp(dailySaving)}`, icon: "📅" },
                    { label: "Jangka waktu", value: commitments[commitment].duration, icon: "⏱️" },
                    { label: "Bagi hasil", value: `${commitments[commitment].ratePct} per tahun`, icon: "🌱" },
                    { label: "Bagi hasil yang didapat", value: `+${formatRp(bagiHasil)}`, icon: "🎉", highlight: true },
                    { label: "Total uangmu nanti", value: formatRp(totalAtEnd), icon: "🏆", highlight: true },
                  ].map((row, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 16 }}>{row.icon}</span>
                        <span style={{ fontSize: 13, color: "#6B7280", fontWeight: 500 }}>{row.label}</span>
                      </div>
                      <span style={{
                        fontSize: 14, fontWeight: row.highlight ? 800 : 600,
                        color: row.highlight ? "#16A34A" : "#374151",
                        fontFamily: "'Nunito', sans-serif",
                      }}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What happens with your money */}
            <div style={{ padding: "0 20px", marginBottom: 20 }}>
              <div style={{
                background: "linear-gradient(145deg, #FEF7ED 0%, #FFF8F0 100%)",
                borderRadius: 20, padding: "20px", border: "1px solid #FDE8CD",
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#92400E", marginBottom: 10 }}>
                  💡 Uangmu ke mana?
                </div>
                <div style={{ fontSize: 13, color: "#78350F", lineHeight: 1.7, fontWeight: 500 }}>
                  Uangmu disalurkan ke ibu-ibu pengusaha desa yang sudah diverifikasi Amartha. Mereka pakai modalnya buat usaha — warung, ternak, pertanian. Keuntungan usaha mereka jadi bagi hasil untukmu.
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div style={{ padding: "0 20px", marginBottom: 20 }}>
              <div style={{
                background: "white", borderRadius: 20, padding: "20px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 14,
                    background: "linear-gradient(135deg, #F0E6D3, #E8D5B8)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
                  }}>
                    👩🏽
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#374151" }}>
                      {testimonials[selectedGoal]?.name || "Ibu Yanti"}
                    </div>
                    <div style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 500 }}>
                      {testimonials[selectedGoal]?.village || "Cianjur"}
                    </div>
                  </div>
                </div>
                <div style={{
                  fontSize: 14, color: "#4B5563", lineHeight: 1.7, fontWeight: 500,
                  fontStyle: "italic", padding: "0 4px",
                }}>
                  "{testimonials[selectedGoal]?.text || "Celengan Amartha membantu saya nabung dengan aman."}"
                </div>
              </div>
            </div>

            {/* Streak preview */}
            <div style={{ padding: "0 20px", marginBottom: 20 }}>
              <div style={{
                background: "#F0FDF4", borderRadius: 16, padding: "16px 20px",
                border: "1.5px solid #BBF7D0", display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#16A34A" }}>🔥 Tantangan nabung</div>
                  <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 500 }}>Nabung 7 hari berturut-turut?</div>
                </div>
                <div style={{
                  display: "flex", gap: 4,
                }}>
                  {[1,2,3,4,5,6,7].map((d) => (
                    <div key={d} style={{
                      width: 22, height: 22, borderRadius: 6,
                      background: d <= 3 ? "#16A34A" : "#E5E7EB",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, color: d <= 3 ? "white" : "#9CA3AF", fontWeight: 700,
                    }}>
                      {d <= 3 ? "✓" : d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* ===== SCREEN 4: PAYMENT & CONSENT ===== */}
        {screen === "payment" && goal && !activated && (
          <>
            {/* How it works */}
            <div style={{ padding: "0 20px", marginBottom: 20 }}>
              <div style={{
                background: "white", borderRadius: 24, padding: "28px 24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)", textAlign: "center",
              }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#374151", marginBottom: 20 }}>
                  Cara kerjanya simpel
                </div>

                {/* Step flow */}
                <div style={{ display: "flex", flexDirection: "column", gap: 0, textAlign: "left" }}>
                  {[
                    { step: "1", icon: "💳", title: "Isi saldo Poket", desc: "Top up Poket seperti biasa lewat transfer atau e-wallet" },
                    { step: "2", icon: "🌱", title: "Otomatis disisihkan", desc: `Setiap hari, ${formatRp(dailySaving)} dari Poketmu masuk ke Celengan` },
                    { step: "3", icon: "🌳", title: "Tabunganmu tumbuh", desc: `Dapat bagi hasil ${commitments[commitment].ratePct}/tahun, uangmu jadi ${formatRp(totalAtEnd)}` },
                  ].map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: 16, position: "relative" }}>
                      {/* Connector line */}
                      {i < 2 && (
                        <div style={{
                          position: "absolute", left: 23, top: 48, width: 2, height: 32,
                          background: "linear-gradient(180deg, #BBF7D0, #E5E7EB)",
                        }} />
                      )}
                      <div style={{
                        width: 48, height: 48, borderRadius: 16, flexShrink: 0,
                        background: "#F0FDF4", border: "1.5px solid #BBF7D0",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 22, zIndex: 1,
                      }}>
                        {s.icon}
                      </div>
                      <div style={{ paddingBottom: i < 2 ? 28 : 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 3 }}>
                          {s.title}
                        </div>
                        <div style={{ fontSize: 13, color: "#6B7280", fontWeight: 500, lineHeight: 1.5 }}>
                          {s.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Poket balance */}
            <div style={{ padding: "0 20px", marginBottom: 20 }}>
              <div style={{
                background: "white", borderRadius: 20, padding: "22px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#374151", marginBottom: 16 }}>
                  Saldo Poketmu
                </div>

                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  background: "#F9FAFB", borderRadius: 14, padding: "16px 18px",
                  border: "1.5px solid #E5E7EB", marginBottom: 14,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 12, background: "#F0FDF4",
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
                    }}>
                      💳
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 500 }}>Saldo tersedia</div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#374151", fontFamily: "'Nunito', sans-serif" }}>
                        {formatRp(poketBalance)}
                      </div>
                    </div>
                  </div>
                  <button style={{
                    padding: "8px 16px", borderRadius: 10, border: "1.5px solid #16A34A",
                    background: "white", color: "#16A34A", fontSize: 13, fontWeight: 700,
                    cursor: "pointer", fontFamily: "'Nunito', sans-serif",
                  }}>
                    Top Up
                  </button>
                </div>

                {/* Daily deduction info */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  marginBottom: 4,
                }}>
                  <span style={{ fontSize: 13, color: "#6B7280", fontWeight: 500 }}>Disisihkan per hari</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#16A34A", fontFamily: "'Nunito', sans-serif" }}>
                    {formatRp(dailySaving)}
                  </span>
                </div>
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                  <span style={{ fontSize: 13, color: "#6B7280", fontWeight: 500 }}>Cukup untuk</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#374151", fontFamily: "'Nunito', sans-serif" }}>
                    ~{Math.floor(poketBalance / dailySaving)} hari
                  </span>
                </div>
              </div>
            </div>

            {/* Consent */}
            <div style={{ padding: "0 20px", marginBottom: 20 }}>
              <div style={{
                background: "white", borderRadius: 20, padding: "22px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#374151", marginBottom: 16 }}>
                  Persetujuan
                </div>

                {/* Consent toggle */}
                <button
                  onClick={() => setConsent(!consent)}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 14, width: "100%",
                    background: consent ? "#F0FDF4" : "#F9FAFB",
                    border: consent ? "1.5px solid #BBF7D0" : "1.5px solid #E5E7EB",
                    borderRadius: 16, padding: "16px 18px", cursor: "pointer", textAlign: "left",
                  }}
                >
                  {/* Checkbox */}
                  <div style={{
                    width: 24, height: 24, borderRadius: 8, flexShrink: 0, marginTop: 1,
                    background: consent ? "#16A34A" : "white",
                    border: consent ? "none" : "2px solid #D1D5DB",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.15s ease",
                  }}>
                    {consent && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#374151", lineHeight: 1.5 }}>
                      Saya setuju saldo Poket saya disisihkan otomatis sebesar {formatRp(dailySaving)}/hari untuk Celengan {goal.label}
                    </div>
                  </div>
                </button>

                {/* Zero balance reassurance */}
                <div style={{
                  marginTop: 14, display: "flex", alignItems: "flex-start", gap: 10,
                  padding: "14px 16px", background: "#FFFBEB", borderRadius: 12,
                  border: "1px solid #FDE68A",
                }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>💡</span>
                  <div style={{ fontSize: 13, color: "#92400E", fontWeight: 500, lineHeight: 1.6 }}>
                    Kalau saldo Poket kosong, nabung otomatis akan dilanjutkan begitu kamu isi ulang. Nggak ada denda atau penalti.
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ===== SCREEN 5: ACTIVATION SUCCESS ===== */}
        {screen === "payment" && activated && (
          <div style={{ padding: "0 20px", textAlign: "center" }}>
            <div style={{
              background: "white", borderRadius: 24, padding: "40px 24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}>
              {/* Success animation */}
              <div style={{
                width: 100, height: 100, borderRadius: "50%", margin: "0 auto 24px",
                background: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 50, border: "3px solid #BBF7D0",
              }}>
                🌱
              </div>

              <div style={{
                fontSize: 24, fontWeight: 900, color: "#16A34A", marginBottom: 8,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}>
                Celenganmu aktif!
              </div>

              <div style={{
                fontSize: 15, color: "#6B7280", fontWeight: 500, lineHeight: 1.6,
                marginBottom: 28, padding: "0 8px",
              }}>
                Mulai besok, {formatRp(dailySaving)} akan otomatis disisihkan dari Poketmu setiap hari. Kamu bisa pantau pertumbuhannya di sini.
              </div>

              {/* Summary mini */}
              <div style={{
                background: "#F0FDF4", borderRadius: 16, padding: "18px 20px",
                border: "1.5px solid #BBF7D0", textAlign: "left",
                display: "flex", flexDirection: "column", gap: 12,
              }}>
                {[
                  { icon: "🎯", label: "Tujuan", value: `Celengan ${goal.label}` },
                  { icon: "📅", label: "Nabung per hari", value: formatRp(dailySaving) },
                  { icon: "⏱️", label: "Jangka waktu", value: commitments[commitment].duration },
                  { icon: "🌳", label: "Target", value: formatRp(totalAtEnd) },
                ].map((row, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 14 }}>{row.icon}</span>
                      <span style={{ fontSize: 13, color: "#6B7280", fontWeight: 500 }}>{row.label}</span>
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#374151", fontFamily: "'Nunito', sans-serif" }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Reminder to top up */}
              <div style={{
                marginTop: 20, background: "#FFFBEB", borderRadius: 12,
                padding: "14px 16px", border: "1px solid #FDE68A",
                fontSize: 13, color: "#92400E", fontWeight: 500, lineHeight: 1.6, textAlign: "left",
              }}>
                ☝️ Pastikan saldo Poketmu selalu terisi ya, supaya nabung otomatis nggak terlewat!
              </div>
            </div>
          </div>
        )}
      </div>

      {screen !== "goals" && !(screen === "payment" && activated) && (
        <div style={{
          position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "100%", maxWidth: 390, padding: "12px 20px 28px",
          background: "linear-gradient(0deg, #FAFDF7 70%, transparent 100%)",
        }}>
          <button
            onClick={() => {
              if (screen === "setup") setScreen("result");
              else if (screen === "result") { setConsent(false); setActivated(false); setScreen("payment"); }
              else if (screen === "payment" && consent) setActivated(true);
            }}
            disabled={screen === "payment" && !consent}
            style={{
              width: "100%", padding: "18px 24px", borderRadius: 18, border: "none",
              background: (screen === "payment" && !consent)
                ? "#D1D5DB"
                : "linear-gradient(135deg, #16A34A 0%, #15803D 100%)",
              color: "white", fontSize: 17, fontWeight: 800,
              fontFamily: "'Nunito', sans-serif",
              cursor: (screen === "payment" && !consent) ? "not-allowed" : "pointer",
              boxShadow: (screen === "payment" && !consent) ? "none" : "0 4px 16px rgba(22,163,74,0.35)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              transition: "all 0.2s ease",
            }}
          >
            {screen === "setup" ? (
              "Lihat Celenganmu"
            ) : screen === "result" ? (
              <>🌱 Mulai Nabung</>
            ) : (
              <>✅ Aktifkan Celengan</>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Celengan;
