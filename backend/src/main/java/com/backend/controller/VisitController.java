package com.backend.controller;

import com.backend.model.VisitModel;
import com.backend.request.VisitRequest;
import com.backend.response.GeneralResponse;
import com.backend.response.VisitResult;
import com.backend.service.PeopleService;
import com.backend.service.VisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("visit")
public class VisitController {

    @Autowired
    VisitService visitService;

    @Autowired
    PeopleService peopleService;

    @PostMapping("create")
    public ResponseEntity<?> visitCreate(@RequestBody VisitRequest visitRequest) throws Exception {
            visitService.createVisit(visitRequest);
//            LocalDate date = visitRequest.getDate();
            return ResponseEntity.ok(new GeneralResponse("Visit created successfully!"));
    }

    @GetMapping("listall")
    public ResponseEntity<?> listVisit() {
        return ResponseEntity.ok(visitService.listVisit());
    }

    @GetMapping("result")
    public ResponseEntity<?> findResultById(@RequestHeader String token){
        Long peopleId = peopleService.getIdByToken(token);
        List<VisitModel> vaccVisit = visitService.genVaccVisitListById(peopleId);
        List<VisitModel> testVisit = visitService.genTestVisitListById(peopleId);
//        VisitResult visitResult = VisitResult.builder()
//                .peopleId(peopleId)
//                .vResultList(vacVisit)
//                .tResultList(testVisit)
//                .build();
        VisitResult visitResult = new VisitResult(peopleId,testVisit,vaccVisit);

        return ResponseEntity.ok(visitResult);
    }

}
