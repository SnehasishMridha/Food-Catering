package project.jparest.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.jparest.entity.ReviewEntity;
import project.jparest.repository.ReviewRepository;

@Service
public class ReviewDao {
	@Autowired
	ReviewRepository repo;
	
	public List<ReviewEntity> getAll()
	{
		List<ReviewEntity> list=repo.findAll();
		return list;
	}
	
	public String addreview(ReviewEntity review ) 
	{
		System.out.println("get2");
		repo.save(review);
		return "Saved";
	}
    
	public void delete(int id) 
	{
		repo.deleteById(id);
	}
	
	public Optional<ReviewEntity> get(int id)
	{
		return Optional.ofNullable(repo.findById(id).get());
	}

}
