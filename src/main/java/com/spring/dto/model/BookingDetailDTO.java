package com.spring.dto.model;

import com.spring.model.BookingDetail;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.modelmapper.ModelMapper;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingDetailDTO {

    @NotNull
    private Long id;

    @NotBlank
    BookingDTO bookingDTO;

    @NotBlank
    ServiceDTO serviceDTO;

    @NotBlank
    VoucherDTO voucherDTO;

    @NotNull(message = "Không được để trống giá")
    @DecimalMin(value = "1000", message = "Giá phải > 1000")
    private Double price;

    public BookingDetail convertDTOToEntity() {
        return new ModelMapper().map(this, BookingDetail.class);
    }

}
