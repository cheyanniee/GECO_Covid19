package com.backend.repo;

import com.backend.model.PeopleModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface PeopleRepo extends JpaRepository<PeopleModel, Integer> {

    @Query("select people from PeopleModel people where email=?1")
    Optional<PeopleModel> getPeopleByEmail(String email);

}
