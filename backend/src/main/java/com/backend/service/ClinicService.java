package com.backend.service;

import com.backend.configuration.CustomException;
import com.backend.model.ClinicModel;
import com.backend.repo.ClinicRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClinicService {

    @Autowired
    ClinicRepo clinicRepo;

    public List<ClinicModel> listClinic() {
        return clinicRepo.findAll();
    }

    public ClinicModel getClinicById(Integer id) throws CustomException {
        return clinicRepo.findById(id).orElseThrow(()-> new CustomException("No Clinic with this ID"));
    }
}
