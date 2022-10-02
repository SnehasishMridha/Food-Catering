package project.jparest.dao;

import org.springframework.beans.factory.annotation.Autowired;

import project.jparest.entity.CartEntity;
import project.jparest.repository.CartRepository;

public class CartDao {

	@Autowired
	CartRepository repo;

	public String addToCart(CartEntity cart ) 
	{
		repo.save(cart);
		return "added in cart";
	}

	
}
