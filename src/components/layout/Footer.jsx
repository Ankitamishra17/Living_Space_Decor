"use client";

import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Interior Design", href: "/services/interior-design" },
  { label: "Modular Kitchen", href: "/services/modular-kitchen" },
  { label: "Turnkey Projects", href: "/services/turnkey-projects" },
  { label: "Architecture", href: "/services/architecture" },
];

const SOCIAL_ICONS = [
  {
    label: "Facebook",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    label: "Instagram",
    isInstagram: true,
  },
  {
    label: "YouTube",
    path: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z M9.75 15.02l5.75-3.02-5.75-3.02v6.04z",
  },
];

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function SocialIcon({ icon }) {
  if (icon.isInstagram) return <InstagramIcon />;
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={icon.path} />
    </svg>
  );
}

function ColTitle({ children }) {
  return (
    <p
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: 9.5,
        fontWeight: 500,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#C8972B",
        margin: "0 0 24px",
        paddingBottom: 12,
        borderBottom: "0.5px solid rgba(200,151,43,0.25)",
      }}
    >
      {children}
    </p>
  );
}

function LinkRow({ label, href = "/" }) {
  return (
    <li style={{ listStyle: "none" }}>
      <Link
        href={href}
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: 13.5,
          fontWeight: 300,
          color: "rgba(245,235,224,0.62)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "9px 0",
          borderBottom: "0.5px solid rgba(255,255,255,0.05)",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#C8972B";
          e.currentTarget.querySelector(".arr").style.opacity = "1";
          e.currentTarget.querySelector(".arr").style.transform =
            "translateX(0)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "rgba(245,235,224,0.62)";
          e.currentTarget.querySelector(".arr").style.opacity = "0";
          e.currentTarget.querySelector(".arr").style.transform =
            "translateX(-4px)";
        }}
      >
        {label}
        <span
          className="arr"
          style={{
            opacity: 0,
            transform: "translateX(-4px)",
            transition: "all 0.2s",
            fontSize: 12,
            color: "#C8972B",
          }}
        >
          →
        </span>
      </Link>
    </li>
  );
}

function ContactRow({ icon, label, value, href }) {
  const content = (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
        padding: "12px 0",
        borderBottom: "0.5px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          flexShrink: 0,
          border: "0.5px solid rgba(200,151,43,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#C8972B",
        }}
      >
        {icon}
      </div>
      <div>
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(245,235,224,0.4)",
            margin: "0 0 3px",
          }}
        >
          {label}
        </p>
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 13.5,
            fontWeight: 300,
            color: "rgba(245,235,224,0.75)",
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );

  if (href)
    return (
      <a href={href} style={{ textDecoration: "none", display: "block" }}>
        {content}
      </a>
    );

  return content;
}

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 48px;
          margin-bottom: 80px;
        }
        .footer-wordmark {
          font-size: 110px;
          top: 70%;
        }
        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-badge {
          display: flex;
        }
        .footer-legal-links {
          display: flex;
          gap: 24px;
        }
        .footer-developed {
          font-family: Poppins;
          font-size: 12px;
          font-weight: 300;
          color: rgba(245, 235, 224, 0.35);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-developed:hover {
          color: #C8972B;
        }

        /* Tablet: 768px–1023px */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer-wordmark {
            font-size: 60px;
            top: 85%;
          }
        }

        /* Mobile: up to 767px */
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 48px 20px !important;
            margin-bottom: 48px ;
          }
          .footer-wordmark {
            font-size: 28px !important;
            top: auto !important;
            bottom: 40px;
            white-space: normal !important;
            text-align: center;
            width: 100%;
            left: 50%;
            transform: translate(-50%, 0) !important;
            line-height: 1.3;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding: 20px !important;
          }
          .footer-badge {
            display: none;
          }
          .footer-legal-links {
            gap: 16px;
            flex-direction: column;
          }
        }

        /* Small mobile: up to 400px */
        @media (max-width: 400px) {
          .footer-wordmark {
            font-size: 25px !important;
            margin-bottom:75px
          }
        }
      `}</style>

      <footer
        style={{
          background: "#3D1F0D",
          color: "#F5EBE0",
          fontFamily: "'Sync', Poppins",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Watermark wordmark — moved to bottom, responsive via class */}
        {/* <div
          className="footer-wordmark"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.15)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            zIndex: 0,
            fontFamily: "'Syncopate', serif",
            bottom: 30,
            top: "auto",
          }}
        >
          Living Space Decor
        </div> */}

        {/* Main grid */}
        <div
          className="footer-grid"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "72px 40px",
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 group flex-shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Living Space Decor"
                width={300}
                height={80}
                priority
                className="h-40 w-auto object-contain -mt-17"
              />
            </Link>

            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 13.5,
                fontWeight: 300,
                color: "rgba(245,235,224,0.62)",
                lineHeight: 1.85,
                margin: "0 0 28px",
              }}
            >
              Crafting elevated living environments across Noida & Delhi NCR.
              Every project is a synthesis of artisan craft, precise execution,
              and your singular vision.
            </p>

            <div style={{ display: "flex", gap: 10 }}>
              {SOCIAL_ICONS.map((icon) => (
                <a
                  key={icon.label}
                  href="#"
                  aria-label={icon.label}
                  style={{
                    width: 38,
                    height: 38,
                    border: "0.5px solid rgba(200,151,43,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(245,235,224,0.5)",
                    transition: "all 0.25s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#C8972B";
                    e.currentTarget.style.color = "#C8972B";
                    e.currentTarget.style.background = "rgba(200,151,43,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(200,151,43,0.35)";
                    e.currentTarget.style.color = "rgba(245,235,224,0.5)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <SocialIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigate */}
          <div>
            <ColTitle>Navigate</ColTitle>
            <ul style={{ padding: 0, margin: 0 }}>
              {NAV_LINKS.map((item) => (
                <LinkRow key={item.name} label={item.name} href={item.href} />
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <ColTitle>Services</ColTitle>
            <ul style={{ padding: 0, margin: 0 }}>
              {SERVICE_LINKS.map((s) => (
                <LinkRow key={s.label} label={s.label} href={s.href} />
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <ColTitle>Reach Us</ColTitle>

            <ContactRow
              label="Studio"
              value="Shop-LGB 28, Galaxy Diamond Plaza Sector 4 Greater Noida West, Greater Noida, Uttar Pradesh 201009"
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
            />

            <ContactRow
              label="Call"
              value="+91 8826606869"
              href="tel:+918826606869"
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            />

            <ContactRow
              label="Email"
              value="info@livingspacedecor.com"
              href="mailto:info@livingspacedecor.com"
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              }
            />
          </div>
        </div>

        <div
          style={{
            borderTop: "0.5px solid rgba(200,151,43,0.2)",
            borderBottom: "0.5px solid rgba(200,151,43,0.2)",
          }}
        />

        {/* Bottom bar */}
        <div style={{ borderTop: "0.5px solid rgba(200,151,43,0.1)" }}>
          <div
            className="footer-bottom-bar"
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "20px 40px",
            }}
          >
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: 12,
                fontWeight: 300,
                color: "rgba(245,235,224,0.35)",
                margin: 0,
              }}
            >
              © 2026 Living Space Decor Pvt. Ltd. All rights reserved.
            </p>

            <div
              className="footer-badge"
              style={{
                alignItems: "center",
                gap: 8,
                fontFamily: "Poppins",
                fontSize: 11,
                color: "rgba(245,235,224,0.3)",
                letterSpacing: "0.06em",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#C8972B",
                  opacity: 0.6,
                  display: "inline-block",
                }}
              />
              Best Interior Design — Noida 2026
            </div>

            <div className="footer-legal-links">
              {[
                ["Privacy Policy", "/privacy-policy"],
                ["Terms", "/terms"],
                ["Sitemap", "/sitemap"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    fontFamily: "poppins",
                    fontSize: 12,
                    fontWeight: 300,
                    color: "rgba(245,235,224,0.35)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C8972B")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(245,235,224,0.35)")
                  }
                >
                  {label}
                </Link>
              ))}
            </div>

            <a
              href="https://deboxtechnology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-developed"
            >
              Developed by Debox Technology
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
