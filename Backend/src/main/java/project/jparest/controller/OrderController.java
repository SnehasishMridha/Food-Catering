package project.jparest.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.jparest.dao.CartDao;
import project.jparest.dao.OrderDao;
import project.jparest.dao.OrderDetailsDao;
import project.jparest.entity.CartEntity;
import project.jparest.entity.OrderEntity;
import project.jparest.repository.CartRepository;


@RestController
@RequestMapping(path="order")
public class OrderController {

	@Autowired
	OrderDao dao;
	
	@Autowired
	OrderDetailsDao dao1;
	
	@Autowired
	CartDao dao2;
	
	@PostMapping("/addcart")
	public String addToCart(@RequestBody CartEntity cart)
	{
		 String check=dao2.addToCart(cart);
		 return check;
	}
	
	@PostMapping("/deleteFromcart")
	public void deleteFromCart(@RequestBody CartEntity cart)
	{
		
	}
	
	@PostMapping("/addorder")
	public String addOrder(@RequestBody OrderEntity order)
	{
		 String check=dao.addOrder(order);
		 return check;
	}
	
	@PostMapping("/deleteorder")
	public String deleteOrder(@RequestBody OrderEntity order)
	{
		 String check=dao.delete(order);
		 return check;
	}
	
	@PostMapping("/getAllOrders")  //employee 
	public List<OrderEntity> getAll()
	{
		 List<OrderEntity> list=dao.getAll();
		 return list;
	}
	
	//---------------------for orderdetails----------------
	
	
	//public String addOrderDetails(@RequestBody List<OrderEntity> order)
	{
		           
	}
	
	
}
