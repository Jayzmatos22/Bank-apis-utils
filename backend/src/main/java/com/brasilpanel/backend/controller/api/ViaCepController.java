package com.brasilpanel.backend.controller.api;

import com.brasilpanel.backend.dto.api.viaCep.ViaCepResponseDTO;
import com.brasilpanel.backend.service.api.viaCep.ViaCepService;
import com.brasilpanel.backend.validators.annotations.ValidCep;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/cep")
@RestController
@RequiredArgsConstructor
public class ViaCepController {

    private final ViaCepService viaCepService;


    @GetMapping("/{cep}")
    public ResponseEntity<ViaCepResponseDTO> getAddress(@PathVariable @ValidCep String cep){
        return ResponseEntity.ok(viaCepService.getAdressByCep(cep));
    }
}
