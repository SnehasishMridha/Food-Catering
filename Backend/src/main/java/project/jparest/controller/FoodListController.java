package project.jparest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import project.jparest.dao.FoodListDao;
import project.jparest.entity.FoodlistEntity;



@RestController
public class FoodListController {
	@Autowired
	FoodListDao dao;
	
	
	@PostMapping("/addfood")
	public String addFood(@RequestBody FoodlistEntity food)
	{
		String check=dao.addfood(food);
		return check;
	}
	@PostMapping("/deletefood")
	public String deleteFood(@RequestBody FoodlistEntity food)
	{
		 String check=dao.delete(food);
		return check;
	}
	
	@PostMapping("/getAllFood")
	public List<FoodlistEntity> getAll()
	{
		 List<FoodlistEntity> list=dao.getAll();
		 return list;
	}
	
	@PostMapping("/search/{name}")   //for search bar
	public Optional<List<FoodlistEntity>> getFoodName(@PathVariable String name)
	{
		 Optional<List<FoodlistEntity>> list=dao.getFoodName(name);
		 return list;
	}
	
	
	
}
