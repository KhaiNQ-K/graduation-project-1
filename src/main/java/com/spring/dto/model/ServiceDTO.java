package com.spring.dto.model;

import com.spring.model.Service;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServiceDTO {

    private Long id;

    @NotBlank(message = "Không được để trống nội dung")
    private String content;

    private String image;

    @NotBlank(message = "Không được để trống tên")
    private String name;

    @NotNull
    @DecimalMin(value = "1000", message = "Giá phải > 0")
    private Double price;

    private Date createAt = new Date();

    private Boolean deleteAt;
    
    

    public Service convertDTOToEntity() {
        return new ModelMapper().map(this, Service.class);
    }

}
