<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {
    function Index()
    {
        // ��������� ������� ������� ������������� � ������
        // ���� ������������ - ��������� ��������� �������
        if ($this->session->userdata('logon') != '') 
        {
            $this->load->model('orders_model');
            $data['orders'] = $this->orders_model->get_orders();
            $this->load->view('admin_view', $data);
            
        }
        else
        {
            // �������� �� �����, ���� ������������� �� ����
            header('Location: /admin/login');
        }
    }
function login()
    {
        if (isset($_POST['password'])) // ��������� ��� �� ������� ������
            // ��������� ������������ ������ � ������
            // ������! � �������� ������� ������ � ����� ���� �� ������ ��������������.
            {
            if (($_POST['password']=='qwerty12345')&&($_POST['name']=='admin'))
            {
                $session_data = array('logon' => 'Yes!'); // ���������� � ������ ������� ������
                $this->session->set_userdata($session_data);
                $this->load->model('orders_model');
                $data['orders'] = $this->orders_model->get_orders();
                $this->load->view('admin_view', $data);
                
            }
            else
            {   
                $this->load->view('login_view_false');
            }
        }
        else
        {
            $this->load->view('login_view');
        }

}
    function logoff()
        {
            $this->session-> sess_destroy();  // �������� ������
            header('Location: /main');
        }           
    }
    
    