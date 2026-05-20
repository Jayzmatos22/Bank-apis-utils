package com.brasilpanel.backend.service.api.bcb;

import com.brasilpanel.backend.dto.api.bcb.*;

import java.util.List;

public interface BcbImplementations {

    public SelicDataDTO getSelic();

    public IpcaDataDTO getIpca();

    DollarPtaxDTO getDollarPtax();

    public CdiDataDTO getCdiRate();

    public List<SelicHistoryDTO> getSelicHistory();

    FinancialDataDTO getFinancialData();
}
