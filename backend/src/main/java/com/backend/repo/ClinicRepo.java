package com.backend.repo;

import com.backend.model.ClinicModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClinicRepo extends JpaRepository<ClinicModel, Integer> {
}
