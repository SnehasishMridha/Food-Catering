package project.jparest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import project.jparest.dao.ReviewDao;
import project.jparest.entity.ReviewEntity;

@RestController
public class ReviewController {

	@Autowired
	ReviewDao rev;
	
	@PostMapping("/addreview")
	public String addReview(@RequestBody ReviewEntity review)
	{
		rev.addreview(review);
		return "record inserted";
	}
	
}
