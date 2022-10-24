package com.backend.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "visit")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VisitModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    //    @Column(name = "last_name")
    LocalDate date;
    String operation;
    String result;

    @OneToOne
    @JoinColumn(name = "patient_id")
    PeopleModel peopleModel;

    @OneToOne
    @JoinColumn(name = "place_id")
    ClinicModel clinicModel;
}
