package com.demo.project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.demo.project.entity.LoginSignup;
@Repository

public interface SignupRepo extends JpaRepository<LoginSignup, Long> {

	LoginSignup findByEmailAndPassword(String email, String password);

}
