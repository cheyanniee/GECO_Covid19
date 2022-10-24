package com.backend.service;

import com.backend.configuration.CustomException;
import com.backend.model.ClinicModel;
import com.backend.model.DoctorModel;
import com.backend.model.PeopleModel;
import com.backend.repo.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {

    @Autowired
    DoctorRepo doctorRepo;

    public void createDoctor(PeopleModel people, ClinicModel clinic){
        DoctorModel doctor = DoctorModel.builder()
                .peopleId(people.getId())
                .clinicModel(clinic)
                .build();

        doctorRepo.saveAndFlush(doctor);
    }

    public DoctorModel getDoctorByPeopleId(Long id) throws CustomException {
        return doctorRepo.getDoctorByPeopleId(id).orElseThrow(()-> new CustomException("Doctor's peopleID not exists."));
    }
}
