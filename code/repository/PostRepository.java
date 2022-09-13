package project.jparest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.jparest.entity.PostTblEntity;

@Repository
public interface PostRepository extends JpaRepository<PostTblEntity, Integer>{

}
