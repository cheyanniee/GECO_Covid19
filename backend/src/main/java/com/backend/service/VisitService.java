package com.backend.service;

import com.backend.model.VisitModel;
import com.backend.repo.ClinicRepo;
import com.backend.repo.PeopleRepo;
import com.backend.repo.VisitRepo;
import com.backend.request.VisitRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VisitService {

    @Autowired
    VisitRepo visitRepo;

    @Autowired
    PeopleRepo peopleRepo;

    @Autowired
    ClinicRepo clinicRepo;

    public List<VisitModel> listVisit() {
        return visitRepo.findAll();
    }

    public void createVisit(VisitRequest visitRequest) throws Exception {

//        Optional<PeopleModel> emailExist = peopleRepo.getPeopleByEmail(peopleRequest.getEmail());
//        if (emailExist.isPresent()) {
//            throw new Exception("Email already exists.");
//        }


        VisitModel visitNew = VisitModel.builder()
                .date(visitRequest.getDate())
                .operation(visitRequest.getOperation())
                .result(visitRequest.getResult())
                .peopleModel(peopleRepo.findById(visitRequest.getPeopleId()).orElseThrow(() -> new Exception("People not found")))
                .clinicModel(clinicRepo.findById(visitRequest.getClinicId()).orElseThrow(() -> new Exception("Clinic not found")))
                .build();

        visitRepo.save(visitNew);
    }

    public List<VisitModel> genVaccVisitListById(Long peopleId){
        List<VisitModel> visitList = visitRepo.getVaccVisitById(peopleId);
        return visitList;
    }

    public List<VisitModel> genTestVisitListById(Long peopleId){
        List<VisitModel> visitList = visitRepo.getTestVisitById(peopleId);
        return visitList;
    }

}
