import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept All"
            declineButtonText="Decline"
            enableDeclineButton
            cookieName="kynova-cookie-consent"
            style={{
                background: "rgba(26, 26, 46, 0.98)",
                backdropFilter: "blur(10px)",
                padding: "20px",
                alignItems: "center"
            }}
            buttonStyle={{
                background: "linear-gradient(135deg, #0066CC 0%, #00A896 100%)",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: "600",
                borderRadius: "8px",
                padding: "12px 24px",
                border: "none",
                cursor: "pointer"
            }}
            declineButtonStyle={{
                background: "transparent",
                color: "#ffffff",
                fontSize: "14px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "8px",
                padding: "12px 24px",
                cursor: "pointer"
            }}
            expires={365}
        >
            <span style={{ fontSize: "14px", lineHeight: "1.6" }}>
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                By clicking "Accept All", you consent to our use of cookies.{" "}
                <a href="/privacy" style={{ color: "#00CCFF", textDecoration: "underline" }}>
                    Learn more
                </a>
            </span>
        </CookieConsent>
    );
};

export default CookieBanner;
