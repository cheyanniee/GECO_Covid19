package com.backend.repo;

import com.backend.model.AffectedAreaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import java.util.Optional;

public interface AffectedAreaRepo extends JpaRepository<AffectedAreaModel, Integer> {

}
