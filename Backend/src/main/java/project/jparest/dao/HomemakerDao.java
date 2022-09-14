package project.jparest.dao;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.jparest.entity.HomemakerEntity;
import project.jparest.repository.HomemakerRepository;


@Service
public class HomemakerDao {

	@Autowired
	HomemakerRepository repo;
	
	public List<HomemakerEntity> getAll()
	{
		List<HomemakerEntity> list=repo.findAll();
		return list;
	}
	
	public String addHomemaker(HomemakerEntity homemaker ) 
	{
		System.out.println("get2");
		repo.save(homemaker);
		return "Saved";
	}
    
	public void delete(int id) 
	{
		repo.deleteById(id);
	}
	
	public Optional<HomemakerEntity> get(int id)
	{
		return Optional.ofNullable(repo.findById(id).get());
	}
}
