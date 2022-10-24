package com.backend.request;

import com.backend.model.PeopleModel;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PeopleRequest {
    Long id;
    String lastName;
    String firstName;
    String email;
    String password;
    String address;
    String postcode;
    String token;
    String dob;
    String phone;
    String officialId;

    PeopleModel.Role role;
}
