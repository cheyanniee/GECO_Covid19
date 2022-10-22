package com.backend.service;

import com.backend.model.PeopleModel;
import com.backend.repo.PeopleRepo;
import com.backend.request.PeopleRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PeopleService {

    @Autowired
    PeopleRepo peopleRepo;

    public List<PeopleModel> listPeople() {
        return peopleRepo.findAll();
    }

    public void createUser(PeopleRequest peopleRequest) throws Exception {

        Optional<PeopleModel> userExist = peopleRepo.getPeopleByEmail(peopleRequest.getEmail());
        if (userExist.isPresent()) {
            throw new Exception("Email already exists.");
        }
        PeopleModel peopleNew = PeopleModel.builder()
                .lastName(peopleRequest.getLastName())
                .firstName(peopleRequest.getFirstName())
                .email(peopleRequest.getEmail())
                .password(peopleRequest.getPassword())
                .address(peopleRequest.getAddress())
                .postcode(peopleRequest.getPostcode())
                .phone(peopleRequest.getPhone())
                .dob(peopleRequest.getDob())
                .officialId(peopleRequest.getOfficialId())
                .role(peopleRequest.getRole())
                .build();

        peopleRepo.save(peopleNew);
    }
}
