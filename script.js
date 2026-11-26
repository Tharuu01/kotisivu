// Painike näyttää ja piilottaa yhden kappaleen etusivulla.
const tietoaPainike = document.querySelector("#tietoa-painike");
const lisatieto = document.querySelector("#lisatieto");

if (tietoaPainike && lisatieto) {
  tietoaPainike.addEventListener("click", function () {
    const naytetaan = lisatieto.hidden;
    lisatieto.hidden = !naytetaan;

    // Kerrotaan painikkeen tila myös ruudunlukijalle.
    tietoaPainike.setAttribute("aria-expanded", String(naytetaan));
    tietoaPainike.textContent = naytetaan
      ? "Piilota lisätieto"
      : "Näytä lisätieto";
  });
}