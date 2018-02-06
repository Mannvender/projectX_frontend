generateMarginForFooter();

window.addEventListener('resize', () => generateMarginForFooter());

function generateMarginForFooter() {
    let footerHeight = generateMarginForFooter.height();

    siteContent.css({
        "margin-bottom": footerHeight
    });
}