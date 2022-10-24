package com.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vladmihalcea.hibernate.type.basic.PostgreSQLEnumType;
import lombok.*;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "people")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@TypeDef(
        name = "pgsql_enum",
        typeClass = PostgreSQLEnumType.class
)
public class PeopleModel {

    public enum Role {
        user,doctor,admin
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

//    @Column(name = "last_name")
    String lastName;

//    @Column(name = "first_name")
    String firstName;
    String email;
    @JsonIgnore
    String password;
    String address;
    String postcode;
    String phone;
    String dob;
    String officialId;

    String token;
    @Enumerated(EnumType.STRING)
    @Type( type = "pgsql_enum" )
    Role role;

    @Column(name = "last_login")
    ZonedDateTime lastLogin;
}
