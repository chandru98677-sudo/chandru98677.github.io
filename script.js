function openPanel(panelId) {

    closePanels();

    document.getElementById(panelId).classList.add("active");

}

function closePanels() {

    document.querySelectorAll(".info-panel").forEach(panel => {

        panel.classList.remove("active");

    });

}
