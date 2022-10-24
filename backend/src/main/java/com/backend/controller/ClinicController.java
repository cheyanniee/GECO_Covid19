package com.backend.controller;

import com.backend.service.ClinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("clinic")
public class ClinicController {

    @Autowired
    ClinicService clinicService;

    @GetMapping("listall")
    public ResponseEntity<?> listAllClinic() {
        return ResponseEntity.ok(clinicService.listClinic());
    }
}
