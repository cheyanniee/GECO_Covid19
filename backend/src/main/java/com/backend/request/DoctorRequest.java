package com.backend.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DoctorRequest {
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

    Integer placeId;
}
