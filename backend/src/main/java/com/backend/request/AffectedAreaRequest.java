package com.backend.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AffectedAreaRequest {

    Integer id;
    Integer caseCount;
    String postcode;
    String areaName;
    String regionName;

}
