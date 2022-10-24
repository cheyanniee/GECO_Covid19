package com.backend.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VisitRequest {

    Long id;

    //    @Column(name = "last_name")
    @JsonFormat(pattern = "dd-MM-yyyy")
    LocalDate date;
    String operation;
    String result;

    Long peopleId;

    Integer clinicId;
}
