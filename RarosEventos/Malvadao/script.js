document.getElementById("generate-query").addEventListener("click", function () {
    const minuto = document.getElementById("minuto").value;
    const oddsCasaMin = document.getElementById("oddsCasaMin").value;
    const oddsCasaMax = document.getElementById("oddsCasaMax").value;
    const oddsVisitanteMin = document.getElementById("oddsVisitanteMin").value;
    const oddsVisitanteMax = document.getElementById("oddsVisitanteMax").value;
    const minutoCustom = document.getElementById("minutoCustom").value || 'X';
    const pressaoTotal = document.getElementById("pressaoTotal").value || 'NULL';
    const totalChutes = document.getElementById("totalChutes").value || 'NULL';
    const ataques = document.getElementById("ataques").value || 'NULL';
    const golsTotal = document.getElementById("golsTotal").value || 'NULL';

    const explanation = `
Explicação detalhada:

1. **Odds de Casa** (m500.OddsCasa BETWEEN ${oddsCasaMin} AND ${oddsCasaMax}):
   - Odds da equipe da casa entre ${oddsCasaMin} e ${oddsCasaMax}.

2. **Odds de Visitante** (m500.OddsVisitante BETWEEN ${oddsVisitanteMin} AND ${oddsVisitanteMax}):
   - Odds da equipe visitante entre ${oddsVisitanteMin} e ${oddsVisitanteMax}.

3. **Pressão Total no Minuto ${minutoCustom}** (m${minutoCustom}.Pressao2Total >= ${pressaoTotal}):
   - A pressão 2 no minuto ${minutoCustom} deve ser igual ou superior a ${pressaoTotal}.

4. **Chutes no Gol no Minuto ${minutoCustom}**:
   - A soma dos chutes no gol em regiões específicas (C1, C2 e C3) deve ser >= ${totalChutes}.

5. **Ataques Dentro da Área** (m${minutoCustom}.AtacandoDentroDaAreaCasa + m${minutoCustom}.AtacandoDentroDaAreaVisitante >= ${ataques}):
   - Soma dos ataques dentro da área das duas equipes (casa e visitante) deve ser >= ${ataques}.

6. **Gols Totais no Fim do Jogo** (m500.GolsTotal >= ${golsTotal}):
   - O total de gols ao final do jogo deve ser >= ${golsTotal}.
`;

    // Exibe a explicação gerada na área de resultados
    document.getElementById("query-output").textContent = explanation.trim();
});
