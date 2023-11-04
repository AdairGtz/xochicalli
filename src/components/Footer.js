import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, ButtonGroup, Center, HStack, IconButton, Image, Stack, Text, } from "@chakra-ui/react";
import { FacebookIcon, InstagramIcon, MasterCardLogo, TwitterIcon, VisaLogo, } from "./checkout";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    return (_jsx(Stack, { as: "footer", role: "contentinfo", py: "4", minWidth: "100%", bgColor: "green.400", children: _jsxs(Stack, { spacing: { base: "4", md: "5" }, children: [_jsxs(Stack, { justify: "space-evenly", direction: ["column", "row"], align: "center", children: [_jsx(HStack, { justifyContent: "center", children: _jsx(Image, { src: import.meta.env.VITE_ADMIN_LOGIN_IMAGE ??
                                    "https://firebasestorage.googleapis.com/v0/b/xochicalli-commerce.appspot.com/o/assets%2Flogo.png?alt=media&token=b5a9e3c5-d9f1-469c-9c9d-9af0c5f1cfd9", alt: "Footer Image", objectFit: "cover", fallbackSrc: "https://via.placeholder.com/256", loading: "lazy", width: ["64px", "128px"], borderRadius: "lg" }) }), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column' }, children: [_jsx(Button, { sx: { color: 'black', marginBottom: 2 }, variant: 'link', onClick: () => navigate("/faqs"), children: "Preguntas frecuentes" }), _jsx(Button, { sx: { color: 'black' }, variant: 'link', onClick: () => navigate("/questions"), children: "Encuesta de satisfacci\u00F3n" })] }), _jsxs(HStack, { children: [_jsx(Text, { fontWeight: 600, children: "S\u00EDguenos en:" }), _jsxs(ButtonGroup, { variant: "ghost", spacing: ["2", "3"], children: [_jsx(IconButton, { as: "a", target: "_blank", href: "https://facebook.com/", "aria-label": "Facebook", icon: _jsx(FacebookIcon, {}) }), _jsx(IconButton, { as: "a", href: "https://instagram.com/", target: "_blank", "aria-label": "Instagram", icon: _jsx(InstagramIcon, {}) }), _jsx(IconButton, { as: "a", href: "https://twitter.com/", target: "_blank", "aria-label": "Twitter", icon: _jsx(TwitterIcon, {}) })] })] })] }), _jsxs(Stack, { direction: ["column", "row"], justifyContent: "center", alignItems: "center", gap: 2, children: [_jsxs(Text, { fontSize: "sm", color: "subtle", textAlign: "center", children: ["\u00A9 ", new Date().getFullYear(), " Xochicalli Tienda. Todos los derechos reservados."] }), _jsxs(Center, { gap: 4, children: [_jsx(VisaLogo, {}), _jsx(MasterCardLogo, {})] })] })] }) }));
};
export default Footer;