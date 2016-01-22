<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {
    function Index()
    {
        // проверяем наличие принака залогинивания в сессии
        // если залогинились - выполняем вызванную функцию
        if ($this->session->userdata('logon') != '') 
        {
            $this->load->model('orders_model');
            $data['orders'] = $this->orders_model->get_orders();
            $this->load->view('admin_view', $data);
            
        }
        else
        {
            // редирект на логин, если залогинивания не было
            header('Location: /admin/login');
        }
    }
function login()
    {
        if (isset($_POST['password'])) // проверяем был ли прислан пароль
            // проверяем корректность пароля и логина
            // Ахтунг! В реальном скрипте пароль в явном виде не должен присутствовать.
            {
            if (($_POST['password']=='qwerty12345')&&($_POST['name']=='admin'))
            {
                $session_data = array('logon' => 'Yes!'); // записываем в сессию признак логона
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
            $this->session-> sess_destroy();  // обнуляем сессию
            header('Location: /main');
        }           
    }
    
    