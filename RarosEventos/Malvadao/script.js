document.getElementById("generate-query").addEventListener("click", function () {
   const minuto = document.getElementById("minuto").value;
   const oddsCasaMin = document.getElementById("oddsCasaMin").value || "NULL";
   const oddsCasaMax = document.getElementById("oddsCasaMax").value || "NULL";
   const oddsVisitanteMin = document.getElementById("oddsVisitanteMin").value || "NULL";
   const oddsVisitanteMax = document.getElementById("oddsVisitanteMax").value || "NULL";
   const minutoCustom = document.getElementById("minutoCustom").value || "X";
   const pressaoTotal = document.getElementById("pressaoTotal").value || "NULL";
   const totalChutes = document.getElementById("totalChutes").value || "NULL";
   const ataques = document.getElementById("ataques").value || "NULL";
   const golsTotal = document.getElementById("golsTotal").value || "NULL";

   // Construção do SQL dinamicamente
   let query = `(m${minuto}.Minuto = ${minuto})\n`;

   if (oddsCasaMin !== "NULL" && oddsCasaMax !== "NULL") {
       query += `AND (m${minuto}.OddsCasa BETWEEN ${oddsCasaMin} AND ${oddsCasaMax})\n`;
   }
   if (oddsVisitanteMin !== "NULL" && oddsVisitanteMax !== "NULL") {
       query += `AND (m${minuto}.OddsVisitante BETWEEN ${oddsVisitanteMin} AND ${oddsVisitanteMax})\n`;
   }
   if (minutoCustom !== "X" && pressaoTotal !== "NULL") {
       query += `AND (m${minutoCustom}.Pressao2Total >= ${pressaoTotal})\n`;
   }
   if (minutoCustom !== "X" && totalChutes !== "NULL") {
       query += `AND ((m${minutoCustom}.TotalChutesC1NoGol + m${minutoCustom}.TotalChutesC2NoGol + m${minutoCustom}.TotalChutesC3NoGol) >= ${totalChutes})\n`;
   }
   if (minutoCustom !== "X" && ataques !== "NULL") {
       query += `AND ((m${minutoCustom}.AtacandoDentroDaAreaCasa + m${minutoCustom}.AtacandoDentroDaAreaVisitante) >= ${ataques})\n`;
   }
   if (golsTotal !== "NULL") {
       query += `AND (m${minuto}.GolsTotal >= ${golsTotal})`;
   }

   // Exibição do SQL gerado
   document.getElementById("query-output").textContent = query.trim();
});
