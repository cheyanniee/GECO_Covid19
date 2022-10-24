package com.backend.service;

import com.backend.model.AffectedAreaModel;
import com.backend.repo.AffectedAreaRepo;
import com.backend.request.AffectedAreaRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AffectedAreaService {

    @Autowired
    AffectedAreaRepo affectedAreaRepo;

    public List<AffectedAreaModel> listAll (){return affectedAreaRepo.findAll();}

    public AffectedAreaModel findById(Integer id) throws Exception{
        Optional <AffectedAreaModel> affectedAreaModel = affectedAreaRepo.findById(id);
        if(affectedAreaModel.isPresent()){
            return affectedAreaModel.get();
        }else{
            throw new Exception("User not found");
        }
    }

    public boolean updateById(AffectedAreaRequest affectedAreaRequest) throws Exception {
        try {
            Optional<AffectedAreaModel> affectedAreaModel = affectedAreaRepo.findById(affectedAreaRequest.getId());

            if (affectedAreaModel.isPresent()) {
                //get details of the user
                AffectedAreaModel affectedTemp = affectedAreaModel.get();

                affectedTemp.setCaseCount(affectedAreaRequest.getCaseCount());
                affectedAreaRepo.save(affectedTemp);
                return true;
            } else {
                throw new Exception("Update failed. Affected area not found");
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }


}
