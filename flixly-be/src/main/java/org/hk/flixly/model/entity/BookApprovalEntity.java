package org.hk.flixly.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "book_approvals")
@Getter
@Setter
public class BookApprovalEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String originalTitle;

    private Long authorId;  // Yazarın ID'si

    private Integer year;

    @Column(length = 2000)
    private String description;

    private Integer pageCount;

    private String publisher;

    private String contributedUser;  // Katkıda bulunan kullanıcının ID'si

    private String status; // örn: PENDING, APPROVED, REJECTED

    private LocalDateTime createdAt = LocalDateTime.now();

    // getter/setter metodları
}
