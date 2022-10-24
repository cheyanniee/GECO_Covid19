package com.backend.repo;

import com.backend.model.DoctorModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface DoctorRepo extends JpaRepository<DoctorModel, Integer> {

    @Query("select doctor from DoctorModel doctor where people_id=?1")
    Optional<DoctorModel> getDoctorByPeopleId(Long id);
}
