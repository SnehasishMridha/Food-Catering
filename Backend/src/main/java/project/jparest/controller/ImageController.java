package project.jparest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import project.jparest.dao.FoodImageDao;

import project.jparest.entity.FoodImageEntity;

@RestController
public class ImageController {

	@Autowired
	FoodImageDao dao;
	
	@PostMapping("/addimage")
	public String addImage(@RequestBody FoodImageEntity image)
	{
		dao.addimage(image);
		return "record inserted";
	}
	
}
