<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	public function index()
	{
		$this->load->view('main_view');
        if(isset($_POST['name'])){
            $add['name'] = $this->input->post('name');
            $add['tel'] = $this->input->post('telephone');
            $this->db->insert('orders', $add);
        }
	}
    

}
