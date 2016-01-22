<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Orders_model extends CI_Model {
    function get_orders()
    {
        $this->db->order_by('id', 'DESC');
        $query = $this->db->get('orders');
        return $query->result_array();
    }
}