package com.backend.controller;

import com.backend.model.AffectedAreaModel;
import com.backend.request.AffectedAreaRequest;
import com.backend.response.GeneralResponse;
import com.backend.service.AffectedAreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ExpressionException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.EmptyStackException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("affected")
public class AffectedAreaController {

    @Autowired
    AffectedAreaService affectedAreaService;

    //show all affected area
    @GetMapping("listall")
    public List<AffectedAreaModel> listAll (){return affectedAreaService.listAll();}

    //find one affected area through GET method
    @GetMapping("find/{id}")
    public ResponseEntity<?> findGet(@PathVariable Integer id){
        try{
            AffectedAreaModel affectedAreaModel = affectedAreaService.findById(id);
            return ResponseEntity.ok(affectedAreaModel);
        }catch (Exception e){
            GeneralResponse response = new GeneralResponse();
            response.setMessage("Affected Area not found");
            return ResponseEntity.badRequest().body(response);
        }
    }

    //find one affected area through POST method
    @PostMapping("find")
    public ResponseEntity<?> findPost(@RequestBody AffectedAreaRequest affectedAreaRequest){
        Integer id = affectedAreaRequest.getId();
        try{
            AffectedAreaModel affectedAreaModel = affectedAreaService.findById(id);
            return ResponseEntity.ok(affectedAreaModel);
        }catch (Exception e){
            GeneralResponse response = new GeneralResponse();
            response.setMessage("Affected Area not found");
            return ResponseEntity.badRequest().body(response);
        }
    }

    //to update casecount through Id
    @PostMapping("update")
    public ResponseEntity<?> findById(@RequestBody AffectedAreaRequest affectedAreaRequest) {
        GeneralResponse generalResponse = new GeneralResponse();
        try{
            affectedAreaService.updateById(affectedAreaRequest);
            generalResponse.setMessage("Update successful for Id=" + affectedAreaRequest.getId());
            return ResponseEntity.ok(generalResponse);
        }catch (Exception e){
            generalResponse.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(generalResponse);
        }
    }
}
