package project.jparest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import project.jparest.DO.FoodListDo;
import project.jparest.dao.FoodListDao;
import project.jparest.entity.FoodlistEntity;
import project.jparest.entity.HomemakerEntity;
import project.jparest.entity.OrderEntity;
import project.jparest.repository.HomemakerRepository;


@CrossOrigin("*")
@RestController
@RequestMapping(path="food")
public class FoodListController {
	@Autowired
	FoodListDao dao;
	
	@Autowired
	HomemakerRepository hrepo;
	
	@PostMapping("/addfood")
	public String addFood(@RequestBody FoodlistEntity food)
	{
		 System.out.println("check");
		 String check=dao.addfood(food);
		 System.out.println("check");
		 if(check!=null)
		    return check;
		 else 
			return "failed to add";
	}
	
	@GetMapping("/getposts/{id}")  
	public List<FoodlistEntity> getAll(@PathVariable int id)
	{
		System.out.println("id"+id);
		 List<FoodlistEntity> list=dao.getPosts(id);
		 if(list!=null)
		 {
			 System.out.println(list);
		 return list;
		 }
		 else return null;
	}
	
//	@PostMapping("/addfood")
//	public String addFood(@RequestBody FoodListDo fooddo)
//	{
//		 System.out.println("check");
//		 HomemakerEntity h=hrepo.findById(fooddo.getHomemakerId());
//		 FoodlistEntity list=new FoodlistEntity(fooddo.getImage(),fooddo.getName(),
//				 fooddo.getData(),fooddo.getPrice(),fooddo.getCategory(),
//				                                fooddo.getQnt(),fooddo.getUnit(),
//				                                fooddo.getDate());
//				 list.setHomemaker(h);
//		        String check= dao.addfood(list);
//		        if(check!=null)
//		        	return "failed to add";
//		        else return "added";	     
//			
//	}
	
	@DeleteMapping("/deletefood/{id}")
	public String deleteFood(@PathVariable int id)
	{
		System.out.println(id);
		 String check=dao.delete(id);
		 System.out.println("deleted");
		return check;
	}
	
	@GetMapping("/getAllFood")
	public List<FoodlistEntity> getAll()
	{
		System.out.println();
		 List<FoodlistEntity> list=dao.getAll();
		 System.out.println(list);
		 return list;
	}
	
//	@GetMapping("/search/{name}")   //for search bar
//	public Optional<List<FoodlistEntity>> getFoodName(@PathVariable String name)
//	{
//		 Optional<List<FoodlistEntity>> list=dao.getFoodName(name);
//		 return list;
//	}
	
	
//	@GetMapping("/search/{name}")   //for search bar
//	public List<FoodlistEntity> getFoodName(@PathVariable String name)
//	{
//		System.out.println(name);
//		 List<FoodlistEntity> list=dao.getFoodName(name);
//		 System.out.println(list);
//		 return list;
//	}
}
