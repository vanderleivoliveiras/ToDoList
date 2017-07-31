(function () {
	var toDoListTeknisa = angular.module('toDoListTeknisa', []);

function mainController($scope, $http) {
	$scope.formData = {};
	var $ = require('jQuery');
	/ Esconde elemento da lista quando
	var fechar = document.getElementsByClassName("fechar");
	var i;
	for (i = 0; i < fechar.length; i++) {
	  fechar[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	  }
	}

	// Marcar elemento quando clicado
	var list = document.querySelector('ul');
	list.addEventListener('click', function(ev) {
	  if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	  }
	}, false);

	// Adicina item na lsita
	function novaTarefa() {
		debugger;
	  var li = document.createElement("li");
	  var inputValue = document.getElementById("txtTarefa").value;
	  var t = document.createTextNode(inputValue);
	  li.appendChild(t);
	  if (inputValue === '') {
		alert("Esta vazio");
	  } else {
		document.getElementById("lista").appendChild(li);
	  }
	  document.getElementById("txtTarefa").value = "";

	  var span = document.createElement("SPAN");
	  var txt = document.createTextNode("\u00D7");
	  span.className = "fechar";
	  span.appendChild(txt);
	  li.appendChild(span);

	  for (i = 0; i < fechar.length; i++) {
		fechar[i].onclick = function() {
		  var div = this.parentElement;
		  div.style.display = "none";
		}
	  }
	}
 }
 })();