package com.brasilpanel.backend.controller.api;


import com.brasilpanel.backend.dto.api.bcb.CdiDataDTO;
import com.brasilpanel.backend.dto.api.bcb.DollarPtaxDTO;
import com.brasilpanel.backend.service.api.bcb.BcbService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/bcb")
@RestController
@RequiredArgsConstructor
public class BcbController {

    private final BcbService bcbService;

    // Tested
    @GetMapping("/dollar-ptax")
    public ResponseEntity<DollarPtaxDTO> getDollar(){
        return ResponseEntity.ok(bcbService.getDollarPtax());
    }

    // Untested
    @GetMapping("/cdi-rate")
    public ResponseEntity<CdiDataDTO> getCdiRate(){
        return ResponseEntity.ok(bcbService.getCdiRate());
    }

}
