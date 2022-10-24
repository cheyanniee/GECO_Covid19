package com.backend.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "clinic")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ClinicModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    //    @Column(name = "last_name")
    String clinicName;
    String phone;
    String address;
    String postcode;
    String region;
}
