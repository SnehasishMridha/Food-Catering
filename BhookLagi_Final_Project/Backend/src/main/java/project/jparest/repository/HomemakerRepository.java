package project.jparest.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.jparest.entity.HomemakerEntity;


@Repository
public interface HomemakerRepository extends JpaRepository<HomemakerEntity, Integer> {

	public HomemakerEntity findById(int i);
	public HomemakerEntity findByEmail(String n);
}
