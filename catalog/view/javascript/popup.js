;// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById('myPopup');
    popup.classList.toggle('hidden');
}
function saveText(element){
	localStorage.setItem('textSales', element.value);
}
function sendText(){
	var text = document.getElementById('textSales').value;
	if(text){
		$.ajax({
			type: "POST",
			url: "index.php?route=ajax/popup/ajaxSendText",
			data: '&textLast='+text,
			success: function(html) {
				document.getElementById('textLast').innerHTML  = text;
			}
		});
	}else{
		document.getElementById('textSales').value = '«Введите текст»';
	}
}
$(document).ready(function(){ 	
	var text = localStorage.getItem('textSales');
	document.getElementById('textSales').value = text;
}) 
