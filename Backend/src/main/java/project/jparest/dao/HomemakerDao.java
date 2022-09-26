package project.jparest.dao;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import project.jparest.entity.ConsumerEntity;
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
		repo.save(homemaker);
		return "Saved";
	}
    
	public void delete(int id) 
	{
		repo.deleteById(id);
	}
	
	
	public HomemakerEntity getCheck(String email,String pwd)
	{
		HomemakerEntity h = repo.findByEmail(email);
		
		if(h!=null)
		{
		if(pwd.equals(h.getPassword()))
		    return h;
		else 
			return null;
		}
		else
			return null;
	}
	
	
	
	public HomemakerEntity changeHomePwd(@PathVariable String email,@PathVariable String newpwd)
	{
		HomemakerEntity h=repo.findByEmail(email);
		if(h!=null)
		{
			h.setPassword(newpwd);
			repo.save(h);
			return h;
		}
		return null;
	}
<<<<<<< HEAD
=======
	
	public HomemakerEntity changeHomePwd(@PathVariable String email,@PathVariable String newpwd)
	{
		HomemakerEntity h=repo.findByEmail(email);
		if(h!=null)
		{
			h.setPassword(newpwd);
			repo.save(h);
			return h;
		}
		return null;
	}
>>>>>>> 72cccc2951f9e1f0f61c54f820340ecfdbc6bd08
}
