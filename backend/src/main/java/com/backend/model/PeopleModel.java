package com.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "people")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PeopleModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

//    @Column(name = "last_name")
    String lastName;

//    @Column(name = "first_name")
    String firstName;
    String email;
    @JsonIgnore
    String password;
    String address;
    String postcode;

    @Column(name = "last_login")
    LocalDateTime lastLogin;
}
