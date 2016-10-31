<?php
class ControllerAjaxPopup extends Controller {
	public function ajaxSendText() {
		$textLast = $_POST['textLast'];
		if($textLast){
			$this->session->data['textLast'] = $textLast;
			echo "Form Submitted succesfully";
		}
	}
}
?>	