package com.backend.controller;

import com.backend.service.PeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("people")
public class PeopleController {

    @Autowired
    PeopleService peopleService;

    @GetMapping("listall")
    public ResponseEntity<?> listPeople() {
        return ResponseEntity.ok(peopleService.listPeople());
    }
}
