"use strict";

// BLOCO 01 — INICIALIZAÇÃO DO PROJETO

document.addEventListener("DOMContentLoaded", () => {
    console.info("Maison Noël — projeto carregado.");

    // BLOCO 02 — FUNÇÃO DO EFEITO DE NEVE

    function iniciarNeve() {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        if (document.querySelector(".camada-neve")) {
            return;
        }

        const camadaNeve = document.createElement("div");
        camadaNeve.classList.add("camada-neve");

        const quantidade = 45;

        // BLOCO 03 — CRIAÇÃO DOS FLOCOS DE NEVE

        for (let i = 0; i < quantidade; i++) {
            const floco = document.createElement("span");

            floco.classList.add("floco-neve");
            floco.textContent = "❄";

            floco.style.left = Math.random() * 100 + "%";
            floco.style.animationDuration = (Math.random() * 8 + 7) + "s";
            floco.style.animationDelay = (Math.random() * -15) + "s";
            floco.style.fontSize = (Math.random() * 7 + 7) + "px";
            floco.style.opacity = Math.random() * 0.5 + 0.3;

            camadaNeve.appendChild(floco);
        }

        document.body.appendChild(camadaNeve);
    }

    // BLOCO 04 — EXECUÇÃO DO EFEITO DE NEVE

    iniciarNeve();

    // BLOCO 05 — SELEÇÃO DOS ELEMENTOS DE ÁUDIO

    const controleAudio = document.getElementById("controleAudio");
    const somNatal = document.getElementById("somNatal");

    // BLOCO 06 — CONFIGURAÇÃO E CONTROLE DO ÁUDIO

    if (controleAudio && somNatal) {
        somNatal.volume = 0.2;

        controleAudio.addEventListener("click", async () => {
            if (somNatal.paused) {
                try {
                    await somNatal.play();

                    controleAudio.textContent = "🔕";
                    controleAudio.setAttribute("aria-label", "Desativar som natalino");

                } catch (erro) {
                    console.error("Erro ao reproduzir áudio:", erro);
                }

            } else {
                somNatal.pause();

                controleAudio.textContent = "🔔";
                controleAudio.setAttribute("aria-label", "Ativar som natalino");
            }
        });

    } else {
        console.error("Botão ou arquivo de áudio não encontrado no HTML.");
    }
});