const formaciones = {
    "4-4-2": [{id:'por',t:88,l:50},{id:'df1',t:70,l:20},{id:'df2',t:72,l:40},{id:'df3',t:72,l:60},{id:'df4',t:70,l:80},{id:'mc1',t:45,l:20},{id:'mc2',t:48,l:40},{id:'mc3',t:48,l:60},{id:'mc4',t:45,l:80},{id:'dc1',t:20,l:40},{id:'dc2',t:20,l:60}],
    "4-3-3": [{id:'por',t:88,l:50},{id:'df1',t:70,l:20},{id:'df2',t:72,l:40},{id:'df3',t:72,l:60},{id:'df4',t:70,l:80},{id:'mc1',t:48,l:30},{id:'mc2',t:52,l:50},{id:'mc3',t:48,l:70},{id:'dc1',t:22,l:20},{id:'dc2',t:18,l:50},{id:'dc3',t:22,l:80}],
    "3-5-2": [{id:'por',t:88,l:50},{id:'df1',t:72,l:30},{id:'df2',t:75,l:50},{id:'df3',t:72,l:70},{id:'mi',t:48,l:15},{id:'mc1',t:52,l:38},{id:'mc2',t:52,l:62},{id:'md',t:48,l:85},{id:'mco',t:35,l:50},{id:'dc1',t:18,l:40},{id:'dc2',t:18,l:60}],
    "4-5-1": [{id:'por',t:88,l:50},{id:'df1',t:70,l:20},{id:'df2',t:72,l:40},{id:'df3',t:72,l:60},{id:'df4',t:70,l:80},{id:'mc1',t:48,l:15},{id:'mc2',t:50,l:32},{id:'mc3',t:52,l:50},{id:'mc4',t:50,l:68},{id:'mc5',t:48,l:85},{id:'dc1',t:20,l:50}],
    "4-3-2-1": [{id:'por',t:88,l:50},{id:'df1',t:70,l:20},{id:'df2',t:72,l:40},{id:'df3',t:72,l:60},{id:'df4',t:70,l:80},{id:'mc1',t:52,l:30},{id:'mc2',t:55,l:50},{id:'mc3',t:52,l:70},{id:'mco1',t:32,l:35},{id:'mco2',t:32,l:65},{id:'dc1',t:15,l:50}],
    "4-1-3-2": [{id:'por',t:88,l:50},{id:'df1',t:70,l:20},{id:'df2',t:72,l:40},{id:'df3',t:72,l:60},{id:'df4',t:70,l:80},{id:'mcd',t:58,l:50},{id:'mc1',t:42,l:25},{id:'mc2',t:40,l:50},{id:'mc3',t:42,l:75},{id:'dc1',t:18,l:40},{id:'dc2',t:18,l:60}],
    "5-4-1": [{id:'por',t:88,l:50},{id:'df1',t:70,l:15},{id:'df2',t:73,l:32},{id:'df3',t:75,l:50},{id:'df4',t:73,l:68},{id:'df5',t:70,l:85},{id:'mc1',t:45,l:25},{id:'mc2',t:48,l:42},{id:'mc3',t:48,l:58},{id:'mc4',t:45,l:75},{id:'dc1',t:18,l:50}],
    "4-1-2-1-2": [{id:'por',t:88,l:50},{id:'df1',t:70,l:20},{id:'df2',t:72,l:40},{id:'df3',t:72,l:60},{id:'df4',t:70,l:80},{id:'mcd',t:58,l:50},{id:'mi',t:45,l:25},{id:'md',t:45,l:75},{id:'mco',t:35,l:50},{id:'dc1',t:18,l:40},{id:'dc2',t:18,l:60}],
    "5-3-2": [{id:'por',t:88,l:50},{id:'df1',t:70,l:15},{id:'df2',t:73,l:32},{id:'df3',t:75,l:50},{id:'df4',t:73,l:68},{id:'df5',t:70,l:85},{id:'mc1',t:48,l:30},{id:'mc2',t:52,l:50},{id:'mc3',t:48,l:70},{id:'dc1',t:20,l:40},{id:'dc2',t:20,l:60}],
    "4-2-3-1": [{id:'por',t:88,l:50},{id:'df1',t:70,l:20},{id:'df2',t:72,l:40},{id:'df3',t:72,l:60},{id:'df4',t:70,l:80},{id:'mcd1',t:55,l:38},{id:'mcd2',t:55,l:62},{id:'mi',t:35,l:20},{id:'mco',t:32,l:50},{id:'md',t:35,l:80},{id:'dc1',t:15,l:50}],
    "3-2-4-1": [{id:'por',t:88,l:50},{id:'df1',t:72,l:30},{id:'df2',t:75,l:50},{id:'df3',t:72,l:70},{id:'mcd1',t:58,l:40},{id:'mcd2',t:58,l:60},{id:'mi',t:38,l:20},{id:'mc1',t:35,l:40},{id:'mc2',t:35,l:60},{id:'md',t:38,l:80},{id:'dc1',t:15,l:50}],
    "2-3-5": [{id:'por',t:88,l:50},{id:'df1',t:75,l:40},{id:'df2',t:75,l:60},{id:'mc1',t:55,l:25},{id:'mc2',t:55,l:50},{id:'mc3',t:55,l:75},{id:'del1',t:25,l:15},{id:'del2',t:20,l:32},{id:'del3',t:18,l:50},{id:'del4',t:20,l:68},{id:'del5',t:25,l:85}],
    "4-2-4": [{id:'por',t:88,l:50},{id:'df1',t:70,l:20},{id:'df2',t:72,l:40},{id:'df3',t:72,l:60},{id:'df4',t:70,l:80},{id:'mc1',t:50,l:40},{id:'mc2',t:50,l:60},{id:'ei',t:22,l:20},{id:'dc1',t:18,l:40},{id:'dc2',t:18,l:60},{id:'ed',t:22,l:80}]
};

let numJugadores, equipos = [], faseActual = "POR", jugadorSubasta, pujaActual = 0, postorActual = null;
let vistaId = 0; // Para saber qué equipo estamos mirando

function iniciarJuego() {
    numJugadores = document.getElementById('input-jugadores').value;
    for(let i=0; i<numJugadores; i++) {
        equipos.push({ saldo: 1000, tactica: "4-4-2", plantilla: {} });
    }
    document.getElementById('pantalla-inicio').style.display = 'none';
    document.getElementById('vista-subasta').style.display = 'flex';
    actualizarBarra();
    siguienteJugador();
}

function siguienteJugador() {
    const lista = baseDeDatos[faseActual];
    jugadorSubasta = lista[Math.floor(Math.random() * lista.length)];
    pujaActual = 0; postorActual = null;
    document.getElementById('player-name').innerText = jugadorSubasta.n;
    document.getElementById('player-photo').style.backgroundImage = `url(${jugadorSubasta.f})`;
    document.getElementById('valor-puja').innerText = "0";
}

function actualizarBarra() {
    const barra = document.getElementById('barra-jugadores');
    barra.innerHTML = '';
    equipos.forEach((eq, i) => {
        let div = document.createElement('div');
        div.className = 'player-slot';
        div.innerHTML = `
            <small>Saldo: ${eq.saldo}M</small>
            <b onclick="verEquipo(${i})">PLAY ${i+1}</b>
            <div class="puja-input-group">
                <input type="number" id="p-${i}" placeholder="M">
                <button onclick="realizarPuja(${i})">OK</button>
            </div>
        `;
        barra.appendChild(div);
    });
}

function realizarPuja(id) {
    let val = parseInt(document.getElementById(`p-${id}`).value);
    if(val > pujaActual && val <= equipos[id].saldo) {
        pujaActual = val; postorActual = id;
        document.getElementById('valor-puja').innerText = pujaActual;
    } else { alert("Puja inválida"); }
}

function abrirSeleccionPosicion() {
    if(postorActual === null) return;
    vistaId = postorActual;
    document.getElementById('vista-subasta').style.display = 'none';
    document.getElementById('vista-campo').style.display = 'block';
    dibujarCampo(true);
}

function dibujarCampo(esFichaje) {
    const campo = document.getElementById('dibujo-campo');
    campo.innerHTML = '';
    const tactica = equipos[vistaId].tactica;
    formaciones[tactica].forEach(pos => {
        let h = document.createElement('div');
        h.className = 'hueco-plus';
        h.style.top = pos.t+"%"; h.style.left = pos.l+"%";
        if(equipos[vistaId].plantilla[pos.id]) {
            h.innerHTML = "X"; h.style.background = "gold";
        } else if(esFichaje) {
            h.onclick = () => confirmarFichaje(pos.id);
        }
        campo.appendChild(h);
    });
}

function confirmarFichaje(posId) {
    equipos[postorActual].plantilla[posId] = jugadorSubasta;
    equipos[postorActual].saldo -= pujaActual;
    document.getElementById('vista-campo').style.display = 'none';
    document.getElementById('vista-subasta').style.display = 'flex';
    actualizarBarra();
    siguienteJugador();
}

function verEquipo(id) {
    vistaId = id;
    document.getElementById('vista-subasta').style.display = 'none';
    document.getElementById('vista-campo').style.display = 'block';
    dibujarCampo(false);
}

function cerrarCampo() {
    document.getElementById('vista-campo').style.display = 'none';
    document.getElementById('vista-subasta').style.display = 'flex';
}

function cambiarTactica(t) {
    equipos[vistaId].tactica = t;
    dibujarCampo(false);
}
