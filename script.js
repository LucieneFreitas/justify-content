// ===================================
// VARIÁVEIS GLOBAIS
// ===================================
let playgroundItemCount = 4;

// ===================================
// APLICAR JUSTIFY-CONTENT
// ===================================
function applyJustify(value) {
    const demoBoxes = document.querySelectorAll('.demo-box');
    demoBoxes.forEach(box => {
        box.style.justifyContent = value;
    });
}

// ===================================
// ATUALIZAR PLAYGROUND
// ===================================
function updatePlayground() {
    const justify = document.getElementById('justifySelect').value;
    const direction = document.getElementById('directionSelect').value;
    const playgroundBox = document.getElementById('playgroundBox');
    const axisLabel = document.getElementById('axisLabel');
    const codeOutput = document.getElementById('codeOutput');
    
    // Aplicar estilos
    playgroundBox.style.justifyContent = justify;
    playgroundBox.style.flexDirection = direction;
    
    // Atualizar label do eixo
    if (direction === 'row') {
        axisLabel.textContent = '➡️ Eixo Principal (justify-content atua aqui)';
    } else {
        axisLabel.textContent = '⬇️ Eixo Principal (justify-content atua aqui)';
    }
    
    // Atualizar código
    codeOutput.innerHTML = `<code>.container {
  display: flex;
  justify-content: ${justify};
  flex-direction: ${direction};
}</code>`;
}

// ===================================
// ADICIONAR ITEM NO PLAYGROUND
// ===================================
function addItemPlayground() {
    if (playgroundItemCount >= 8) {
        alert('Máximo de 8 itens!');
        return;
    }
    
    playgroundItemCount++;
    const playgroundBox = document.getElementById('playgroundBox');
    const newItem = document.createElement('div');
    newItem.className = 'item';
    newItem.textContent = playgroundItemCount;
    playgroundBox.appendChild(newItem);
}

// ===================================
// REMOVER ITEM DO PLAYGROUND
// ===================================
function removeItemPlayground() {
    if (playgroundItemCount <= 1) {
        alert('Mínimo de 1 item!');
        return;
    }
    
    const playgroundBox = document.getElementById('playgroundBox');
    playgroundBox.removeChild(playgroundBox.lastElementChild);
    playgroundItemCount--;
}

// ===================================
// RESETAR PLAYGROUND
// ===================================
function resetPlayground() {
    const playgroundBox = document.getElementById('playgroundBox');
    playgroundBox.innerHTML = '';
    
    playgroundItemCount = 4;
    for (let i = 1; i <= 4; i++) {
        const item = document.createElement('div');
        item.className = 'item';
        item.textContent = i;
        playgroundBox.appendChild(item);
    }
    
    document.getElementById('justifySelect').value = 'flex-start';
    document.getElementById('directionSelect').value = 'row';
    updatePlayground();
}

// ===================================
// INICIALIZAR
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    updatePlayground();
});