package com.backend.response;

import com.backend.model.VisitModel;
import lombok.*;

import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VisitResult {
    Long peopleId;
    List<VisitModel> testList;
    List<VisitModel> vaccList;
}
