package com.backend.service;

import com.backend.model.PeopleModel;
import com.backend.repo.PeopleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PeopleService {

    @Autowired
    PeopleRepo peopleRepo;

    public List<PeopleModel> listPeople() {
        return peopleRepo.findAll();
    }
}
