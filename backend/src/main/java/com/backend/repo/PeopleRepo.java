package com.backend.repo;

import com.backend.model.PeopleModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PeopleRepo extends JpaRepository<PeopleModel, Integer> {
}
