package project.jparest.dao;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.jparest.entity.FoodlistEntity;
import project.jparest.entity.OrderEntity;
import project.jparest.repository.FoodListRepository;
@Service
public class FoodListDao {

	@Autowired
	FoodListRepository repo;

	public List<FoodlistEntity> getAll()
	{
		List<FoodlistEntity> list=repo.findAll();
		return list;
	}

	public String addfood(FoodlistEntity food ) 
	{
		repo.save(food);
		return "added";
	}

	public String delete(int id) 
	{
		repo.deleteById(id);
		return "deleted";
	}

	public List<FoodlistEntity> getPosts(int id) 
	{
		List<FoodlistEntity> post=repo.findByHomemakerId(id);
		System.out.println(post);
		return post;		
	}

//	public Optional<List<FoodlistEntity>> getFoodName(String name)
//	{
//		return Optional.ofNullable(repo.findByName(name));
//	}

	
	
}
