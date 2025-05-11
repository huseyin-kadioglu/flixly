package org.hk.flixly.controller;

import org.hk.flixly.model.ProfileInfoDTO;
import org.hk.flixly.service.ProfileService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/profile")
public class ProfileSummaryController {

    private final ProfileService profileService;

    public ProfileSummaryController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/")
    public ProfileInfoDTO findAll(@AuthenticationPrincipal UserDetails userDetails) {

        return profileService.getProfileInfo(userDetails);
    }
}