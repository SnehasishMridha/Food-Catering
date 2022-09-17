package project.jparest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.jparest.dao.OrderDetailsDao;
import project.jparest.entity.OrderDetailsEntity;

@RestController
@RequestMapping(path="order")
public class OrderDetailsController {
	@Autowired
	OrderDetailsDao dao;
	
	@PostMapping("/add")
	public boolean addOrder(@RequestBody OrderDetailsEntity o)
	{
		OrderDetailsEntity order=new OrderDetailsEntity(o.getQnt(),o.getTotal_amount());
	
		return true;
	}

}
