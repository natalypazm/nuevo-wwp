//Lógica
function Chat(_nombre,_imagen)
	{
		this.nombre=_nombre;
		this.imageURL=_imagen;
		this.ultimoMensaje="";
		this.ultimaConexion="";
		this.nuevoMensaje=[];
		//this.nuevoHora[];
		this.borrarMensajes=function(){
			//alert("mensaje borrado");
		}
	}

var dataListaChats=[
	new Chat("chat1","image/mariapaula.jpg"),
	new Chat("usuario2","image/jose.jpg"),
	new Chat("chat3","image/katy.jpg")
];

//Parte visual
var liListItem = null;
function init(){
	initChatList();
}

function initChatList(){
	var elListaChats=document.getElementById("lista-chats"); 

	for(var i in dataListaChats){
			var htmlChatItem =  '<li><div class="avatar">' +
				'<img src="'+dataListaChats[i].imageURL+'" alt="" class="wh-44">' +
				'<h4 class="w-contact-name">'+dataListaChats[i].nombre+'</h4>' +
				'<p class="w-last-message" id="mensaje">'+dataListaChats[i].ultimoMensaje +'</p>' +
			'</div>' +
			'<div class="time" id="hora">'+dataListaChats[i].ultimaConexion+'</div></li>';
			dataListaChats[i].borrarMensajes();
			elListaChats.innerHTML+=htmlChatItem;
		}
		setEventsChatList();
}

function setEventsChatList(){
	var listaChats=document.getElementById("lista-chats");
	var arrListItems=listaChats.getElementsByTagName("li");
	//console.log(typeof arrListItems);
	for(var i=0;i<arrListItems.length;i++){
	//for(var i in arrListItems){
		//console.log(arrListItems[i]);
		/*arrListItems[i].onclick=function(){
			alert("CLICK");
		}*/
		arrListItems[i].addEventListener('click',onChatItemClick);
	}
}
function onChatItemClick(evt){
	//console.log(evt.currentTarget);
	var chat=document.getElementById("chat");
	var conctactName=evt.currentTarget.getElementsByClassName("w-contact-name")[0].textContent;
	var imgURL=evt.currentTarget.getElementsByClassName("wh-44")[0].src;

	actualizarCabeceraChat(conctactName,imgURL,"En linea");
	chat.innerHTML="";

}

function onMensajeKey(evt)
{
	if(evt.keyCode == 13)
	{
		var elInputMensajes = document.getElementById("mensajes");

		crearChat(elInputMensajes.value);
		crearMensaje(elInputMensajes.value);

		elInputMensajes.value = "";
	}
}

function crearMensaje(_mensaje)
{
	var htmlMensajeIn = '<div class="w-message w-message-in">' +
		'<div class="w-message-text">' +
			'<h5 class="green-1">Maria Paula Rivarola</h5>'+
			'<p>Jajaja Sii finalmente se corto!!</p>'+
			'<div class="time">11:13</div>'+
		'</div>'+
	'</div>';

	var d = new Date();
	var htmlMensajeOut = '<div class="w-message w-message-out">' +
		'<div class="w-message-text">' +
			'<p>' + _mensaje + '</p>' +
			'<div class="time">' + d.getHours() + ':' + d.getMinutes(); + '</div>' +
		'</div>' +
	'</div>';

	var mensaje = liListItem.getElementsByClassName("w-last-message")[0];
	mensaje.innerHTML = _mensaje;
	console.log();


	var elChat = document.getElementById("chat");
	elChat.innerHTML += htmlMensajeOut;
	elChat.scrollTop = elChat.scrollHeight;
}

function crearListaChats()
{

}
function crearChat(_mensaje)
{
	var elListaChats = document.getElementById("lista-chats");

	if(liListItem == null)
	{
		liListItem = document.createElement('LI');
		var htmlChatItem =  '<div class="avatar">' +
				'<img src="image/logocodeacademy.png" alt="" class="wh-44">' +
				'<h4 class="w-contact-name">Nueva conversación</h4>' +
				'<p class="w-last-message" id="mensaje">' + _mensaje + '</p>' +
			'</div>' +
			'<div class="time" id="hora">14:27</div>';

		liListItem.innerHTML = htmlChatItem;
		nuevoMensaje.innerHTML+=_mensaje;

		elListaChats.insertBefore(liListItem, elListaChats.childNodes[0]);
	}
	setEventsChatList();
	//elListaChats.innerHTML += htmlChatItem;
}

function actualizarCabeceraChat(_contactName,_imageURL,_estado)
{
	var chatHeader=document.getElementById("chat-header");
	chatHeader.getElementsByClassName('w-contact-name')[0].innerHTML=_contactName;
	chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML=_estado;
	chatHeader.getElementsByTagName('img')[0].src=_imageURL;
}


 var search = document.getElementById("search"),
   	food = document.getElementsByTagName("h4"),
    forEach = Array.prototype.forEach;
    	//console.log(food);
	search.addEventListener("keyup", function(e){
    var choice = this.value;
    forEach.call(food, function(f){
         if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
            f.parentNode.parentNode.style.display = "none";        
         else
             f.parentNode.parentNode.style.display = "block";        
     });
 	},false); 