package project.jparest.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.jparest.entity.PostTblEntity;
import project.jparest.repository.PostRepository;


@Service
public class PostDao {
	
			@Autowired
			PostRepository repo;
			
			public List<PostTblEntity> getAll()
			{
				List<PostTblEntity> list=repo.findAll();
				return list;
			}
			
			public String addpost(PostTblEntity post ) 
			{
				System.out.println("get2");
				repo.save(post);
				return " Saved";
			}
		    
			public void delete(int id) 
			{
				repo.deleteById(id);
			}
			
			public Optional<PostTblEntity> get(int id)
			{
				return Optional.ofNullable(repo.findById(id).get());
			}
	}

