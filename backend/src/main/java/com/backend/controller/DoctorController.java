package com.backend.controller;

import com.backend.configuration.CustomException;
import com.backend.model.ClinicModel;
import com.backend.model.DoctorModel;
import com.backend.model.PeopleModel;
import com.backend.request.DoctorRequest;
import com.backend.request.PeopleRequest;
import com.backend.response.GeneralResponse;
import com.backend.service.ClinicService;
import com.backend.service.DoctorService;
import com.backend.service.PeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("doctor")
public class DoctorController {

    @Autowired
    DoctorService doctorService;

    @Autowired
    ClinicService clinicService;

    @Autowired
    PeopleService peopleService;

    @PostMapping("register")
    public ResponseEntity<?> registerDoctor(@RequestBody DoctorRequest doctorRequest) throws Exception {

        PeopleRequest peopleRequest = PeopleRequest.builder()
                .firstName(doctorRequest.getFirstName())
                .lastName(doctorRequest.getLastName())
                .email(doctorRequest.getEmail())
                .password(doctorRequest.getPassword())
                .address(doctorRequest.getAddress())
                .postcode(doctorRequest.getPostcode())
                .phone(doctorRequest.getPhone())
                .dob(doctorRequest.getDob())
                .officialId(doctorRequest.getOfficialId())
                .role(PeopleModel.Role.doctor)
                .build();
        peopleService.createUser(peopleRequest);
        PeopleModel peopleModel = peopleService.findPeopleByOfficialId(doctorRequest.getOfficialId().toUpperCase());
        ClinicModel clinicModel = clinicService.getClinicById(doctorRequest.getPlaceId());
        doctorService.createDoctor(peopleModel, clinicModel);
        return ResponseEntity.ok(new GeneralResponse("Register successfully!"));
    }

    @GetMapping("clinic")
    public ResponseEntity<?> getClinicByPeopleId(@RequestHeader String token) throws CustomException {
        DoctorModel doctorModel = doctorService.getDoctorByPeopleId(peopleService.getIdByToken(token));
        return ResponseEntity.ok(doctorModel);
    }
}
