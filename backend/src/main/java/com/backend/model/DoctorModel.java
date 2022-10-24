package com.backend.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "doctor")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    Long peopleId;

    @OneToOne
    @JoinColumn(name = "place_id")
    ClinicModel clinicModel;

}
