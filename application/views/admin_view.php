<!doctype html>
<html>
<head>
<meta charset="utf-8"/>
<title>Keysmm - профессиональное создание сайтов</title>
<link href="<?php base_url(); ?>/css/style.css" type="text/css" rel="stylesheet"/>
<link rel="icon" type="image/png" href="img/favicon.png" />
<!-- Internet Explorer HTML5 enabling script: -->
<!--[if IE]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<style type="text/css">

      .clear {
        zoom: 1;
        display: block;
      }
</style>
<![endif]-->
    
</head>
<body>
<h1 class="admin_h1">Панель админа</h1>

<a href="<?php base_url(); ?>/admin/logoff" class="session_end">Завершить сессию</a> 
<div class="wrap_orders">
   <?php foreach($orders as $item):?>
   
<p class="name_order"><b>Имя:</b>&nbsp;&nbsp;<?php echo $item['name'];?>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;---&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<p class="tel_order"><b>Телефон:</b>&nbsp;&nbsp;<?php echo $item['tel'];?></p>
   <?php endforeach;?> 
</div>    
</body>
</html>