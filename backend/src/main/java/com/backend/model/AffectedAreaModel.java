package com.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "affectedarea")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AffectedAreaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    Integer caseCount;

    String postcode;
    String areaName;
    String regionName;


}
