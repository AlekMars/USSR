import React from "react";
import "./footer.css";

export default () => {
    const year = new Date().getFullYear();
    return <footer>
        <span className="footer__copy">©{year}</span>&nbsp;
        <span className="footer__text">Критика не шоколад, чтобы её любить. Л. Брежнев </span>
    </footer>
}
