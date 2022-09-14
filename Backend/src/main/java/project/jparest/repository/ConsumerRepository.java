package project.jparest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.jparest.entity.ConsumerEntity;

@Repository
public interface ConsumerRepository extends JpaRepository<ConsumerEntity, Integer>  {

}
