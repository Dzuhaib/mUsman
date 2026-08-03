"use client";

const CHANNEL_URL = "https://t.me/+oJRrg4PLNSllY2Zk";

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" style={{ fill: "#0d1117", flexShrink: 0 }}>
    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const STATS = [
  { value: "4.2K+", label: "Followers", labelAr: "متابع" },
  { value: "100%", label: "Transparency", labelAr: "شفافية" },
  { value: "24/7", label: "Support", labelAr: "دعم" },
];

const FEATURES = [
  { icon: "🎯", en: "Accurate Daily Signals", ar: "إشارات يومية دقيقة" },
  { icon: "📊", en: "Professional Market Analysis", ar: "تحليل سوق احترافي" },
  { icon: "💎", en: "Premium Risk & Capital Management", ar: "إدارة مخاطر ورأس مال احترافية" },
  { icon: "⚡", en: "Live Updates & 24/7 Support", ar: "تحديثات لحظية ودعم متواصل" },
];

export default function Home() {
  return (
    <div dir="ltr" style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>

      <header style={{
        background: "rgba(13, 17, 23, 0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--tg-panel-light)",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexShrink: 0,
        zIndex: 10,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src="/logo.jpeg"
            alt="الذهب/الدولار ماستر🔰"
            style={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
              border: "2px solid var(--gold)",
              boxShadow: "0 2px 12px var(--gold-glow)",
            }}
          />
          <div>
            <h1 style={{ fontSize: 16, fontWeight: 700, color: "var(--tg-text-primary)", letterSpacing: 0.3 }}>
              الذهب/الدولار ماستر🔰
            </h1>
            <p style={{ fontSize: 12, color: "var(--gold-soft)", marginTop: 1 }}>
              Gold USD Master · الذهب/الدولار
            </p>
          </div>
        </div>

        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(135deg, #d4af37, #a8852b)",
            color: "#0d1117",
            textDecoration: "none",
            borderRadius: 22,
            padding: "8px 18px",
            fontSize: 13,
            fontWeight: 700,
            whiteSpace: "nowrap",
            transition: "transform 0.15s, box-shadow 0.2s",
            flexShrink: 0,
            boxShadow: "0 2px 10px var(--gold-glow)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 4px 16px var(--gold-glow)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 10px var(--gold-glow)";
          }}
        >
          Join Channel · انضم
        </a>
      </header>

      <div
        className="chat-bg"
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "14px 16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="animate-fade-in" style={{
          background: "linear-gradient(180deg, rgba(21,27,35,0.98), rgba(13,17,23,0.98))",
          borderRadius: 20,
          padding: "32px 24px",
          textAlign: "center",
          maxWidth: 380,
          width: "100%",
          border: "1px solid var(--tg-panel-light)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 50% -20%, rgba(212,175,55,0.18), transparent 60%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative" }}>
            <img
              src="/logo.jpeg"
              alt="الذهب/الدولار ماستر🔰"
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                objectFit: "cover",
                marginTop: 8,
                marginBottom: 16,
                border: "3px solid var(--gold)",
                boxShadow: "0 4px 24px var(--gold-glow)",
              }}
            />
            <div style={{ fontSize: 23, fontWeight: 800, color: "var(--tg-text-primary)", letterSpacing: 0.3 }}>
              الذهب/الدولار ماستر🔰
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--gold-soft)", marginTop: 4, letterSpacing: 0.6, textTransform: "uppercase" }}>
              Gold USD Master
            </div>
            <div style={{ fontSize: 13, color: "var(--tg-text-secondary)", marginTop: 10, lineHeight: 1.7 }}>
              Premium Gold Signals · Precise Trading · Daily Analysis
              <br />
              <span dir="rtl" style={{ display: "inline-block", marginTop: 4 }}>
                إشارات ذهبية متميزة · تداول دقيق · تحليل يومي
              </span>
            </div>

            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "var(--tg-hit-bg)",
              border: "1px solid var(--gold)",
              borderRadius: 12,
              padding: "4px 14px",
              fontSize: 12,
              color: "var(--gold-soft)",
              marginTop: 14,
              fontWeight: 600,
            }}>
              <span style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--gold)",
                display: "inline-block",
                animation: "pulse 1.5s infinite",
                boxShadow: "0 0 8px var(--gold)",
              }} />
              Official Channel · القناة الرسمية
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
              marginTop: 22,
            }}>
              {STATS.map((s) => (
                <div key={s.label} style={{
                  background: "rgba(212,175,55,0.06)",
                  border: "1px solid var(--tg-panel-light)",
                  borderRadius: 12,
                  padding: "10px 4px",
                }}>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "var(--gold-soft)" }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "var(--tg-text-secondary)", marginTop: 2 }}>
                    {s.label} · <span dir="rtl">{s.labelAr}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid var(--tg-panel-light)", margin: "22px -24px 0", padding: "18px 24px 4px" }}>
              <p style={{ fontSize: 12, color: "var(--tg-text-secondary)", textAlign: "center", marginBottom: 12, lineHeight: 1.7 }}>
                Get Daily XAUUSD Signals &amp; Gold Market Analysis — Join Us on Telegram
                <br />
                <span dir="rtl" style={{ display: "inline-block", marginTop: 2 }}>
                  احصل على إشارات ذهب (XAUUSD) اليومية والتحليلات — انضم إلينا على تيليجرام
                </span>
              </p>
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  background: "linear-gradient(135deg, #d4af37, #a8852b)",
                  color: "#0d1117",
                  textDecoration: "none",
                  borderRadius: 26,
                  padding: "12px 28px",
                  fontSize: 14,
                  fontWeight: 700,
                  boxShadow: "0 4px 18px var(--gold-glow)",
                  transition: "transform 0.15s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 26px var(--gold-glow)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 18px var(--gold-glow)";
                }}
              >
                <TelegramIcon />
                Follow الذهب/الدولار ماستر🔰
              </a>
            </div>
          </div>
        </div>

        <div className="animate-fade-in" style={{
          background: "linear-gradient(180deg, rgba(21,27,35,0.98), rgba(13,17,23,0.98))",
          borderRadius: 20,
          padding: "24px 20px",
          marginTop: 16,
          maxWidth: 380,
          width: "100%",
          border: "1px solid var(--tg-panel-light)",
          textAlign: "left",
        }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "var(--gold-soft)", marginBottom: 14 }}>
            📈 Professional Gold Trading Signals (XAUUSD)
            <br />
            <span dir="rtl" style={{ fontSize: 13, color: "var(--tg-text-secondary)", fontWeight: 500 }}>
              إشارات تداول الذهب الاحترافية
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "var(--tg-text-primary)", lineHeight: 1.6 }}>
            {FEATURES.map((f) => (
              <div key={f.en} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ flexShrink: 0 }}>{f.icon}</span>
                <span>
                  {f.en}
                  <br />
                  <span dir="rtl" style={{ color: "var(--tg-text-secondary)", fontSize: 12 }}>{f.ar}</span>
                </span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--gold-soft)", marginTop: 16, lineHeight: 1.7 }}>
            🚀 Join us and start trading with confidence.
            <br />
            <span dir="rtl" style={{ fontSize: 13, fontWeight: 600, color: "var(--tg-text-secondary)" }}>
              انضم إلينا وابدأ التداول بثقة.
            </span>
          </div>
        </div>

        <div className="animate-fade-in" style={{
          maxWidth: 380,
          width: "100%",
          marginTop: 16,
        }}>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              background: "linear-gradient(135deg, rgba(212,175,55,0.12), rgba(168,133,43,0.06))",
              border: "1px solid var(--gold)",
              borderRadius: 20,
              padding: "22px 20px",
              textAlign: "center",
              textDecoration: "none",
              boxShadow: "0 6px 24px var(--gold-glow)",
              transition: "transform 0.15s, box-shadow 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 12px 32px var(--gold-glow)";
              e.currentTarget.style.borderColor = "var(--gold-soft)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 24px var(--gold-glow)";
              e.currentTarget.style.borderColor = "var(--gold)";
            }}
          >
            <div style={{ fontSize: 17, fontWeight: 800, color: "var(--gold-soft)", lineHeight: 1.5 }}>
              الذهب/الدولار ماستر🔰
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--tg-text-primary)", marginTop: 3, letterSpacing: 0.5, textTransform: "uppercase" }}>
              Gold USD Master
            </div>
            <div style={{ fontSize: 12, color: "var(--tg-text-secondary)", marginTop: 8, lineHeight: 1.7 }}>
              Premium Gold Signals · Precise Trading · Daily Analysis
              <br />
              <span dir="rtl" style={{ display: "inline-block", marginTop: 2 }}>
                إشارات ذهبية متميزة · تداول دقيق · تحليل يومي
              </span>
            </div>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "linear-gradient(135deg, #d4af37, #a8852b)",
              color: "#0d1117",
              borderRadius: 26,
              padding: "11px 26px",
              fontSize: 14,
              fontWeight: 700,
              marginTop: 16,
              boxShadow: "0 3px 14px var(--gold-glow)",
            }}>
              <TelegramIcon />
              Join Channel · انضم الآن
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease both; }
        @media (max-width: 600px) {
          header { padding: 8px 12px !important; }
        }
      `}</style>
    </div>
  );
}
