package com.backend.controller;

import com.backend.model.PeopleModel;
import com.backend.request.PeopleRequest;
import com.backend.response.GeneralResponse;
import com.backend.service.PeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("people")
public class PeopleController {

    @Autowired
    PeopleService peopleService;

    @GetMapping("listall")
    public ResponseEntity<?> listPeople() {
        return ResponseEntity.ok(peopleService.listPeople());
    }

    @PostMapping("register")
    public ResponseEntity<?> peopleRegister(@RequestBody PeopleRequest peopleRequest) {
        try {
            peopleService.createUser(peopleRequest);
            return ResponseEntity.ok(new GeneralResponse("Register successfully!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new GeneralResponse(e.getMessage()));
        }
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody PeopleRequest peopleRequest) {
        try {
            return ResponseEntity.ok(peopleService.loginValidate(peopleRequest.getEmail(), peopleRequest.getPassword()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new GeneralResponse(e.getMessage()));
        }
    }

    @GetMapping("getpeople")
    public ResponseEntity<?> getPeople(@RequestHeader("token") String token) throws Exception {
        PeopleModel people = peopleService.getPeopleById(peopleService.getIdByToken(token));
        return ResponseEntity.ok(people);
    }

}
