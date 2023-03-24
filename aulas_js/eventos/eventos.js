//são ações disparadas pela interação do usuário na página.
/*
Existem muitos eventos. Os mais utilizados são:
onclick -> disparado quando recebe um click.
ondblclick -> disparado quando recebe click duplo.
onmouseover -> disparado quando mouse está sobre.
onmouseout -> disparado quando mouse é movido para fora.
onmousemove -> disparado quando mouse é movido no elemento.
onmousedown -> disparado quando o clicke do botao foi pressionado.
onmouseup -> disparado quando o clique do botão é liberado.
onfocus -> disparado quando o elemento recebe o foco. Válido para input.
onchange -> disparado quando existe mudança no conteúdo. 
onblur -> disparado quando o elemento perde o foco.
onkeydown -> disparado quando uma tecla é pressionada.
onkeypress -> disparado quando uma tecla é pressionada e solta.
onkeyup -> disparado quando uma tecla é solta sobre um elemento.
onload -> disparado quando a página terminou de ser carregada. body.
onresize -> disparado quando há um redimensionamento na tela.

*/

function eventoClick(){
    document.body.style.background = 'skyblue';
}

function eventoDblClick(){
    alert('Evento de clique duplo');
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}