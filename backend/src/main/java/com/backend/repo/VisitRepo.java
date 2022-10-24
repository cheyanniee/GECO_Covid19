package com.backend.repo;

import com.backend.model.VisitModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

public interface VisitRepo extends JpaRepository<VisitModel,Long> {

    @Query("Select visit from VisitModel visit JOIN visit.peopleModel people where visit.operation = 'vacc' and people.id = ?1")
    ArrayList<VisitModel> getVaccVisitById(Long peopleId);

    @Query("Select visit from VisitModel visit JOIN visit.peopleModel people where visit.operation = 'test' and people.id = ?1")
    ArrayList<VisitModel> getTestVisitById(Long peopleId);
}
