package project.jparest.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.jparest.dao.OrderDao;

import project.jparest.entity.OrderEntity;


@CrossOrigin("*")
@RestController
@RequestMapping(path="order")
public class OrderController {

	@Autowired
	OrderDao dao;

	//@Autowired
	//CartDao dao2;
	
	@PostMapping("/addorder")
	public String addOrder(@RequestBody OrderEntity order)
	{
		System.out.println(order.getName());
		 String check=dao.addOrder(order);
		 return check;
	}
	
	@PostMapping("/deleteorder/{id}")
	public String deleteOrder(@PathVariable int id)
	{
		String check=dao.delete(id);
		 return check;
	}

	@GetMapping("/getorders/{id}")  
	public List<OrderEntity> getAll(@PathVariable int id)
	{
		System.out.println("id"+id);
		 List<OrderEntity> list=dao.getOrders(id);
		 if(list!=null)
		 {
			 System.out.println(list);
		 return list;
		 }
		 else return null;
	}
	
}
