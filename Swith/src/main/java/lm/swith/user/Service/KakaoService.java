
	
	
	
	/*
    @Value("${kakao.client.id}")
    private String KAKAO_CLIENT_ID;

    @Value("${kakao.client.secret}")
    private String KAKAO_CLIENT_SECRET;

    @Value("${kakao.redirect.url}")
    private String KAKAO_REDIRECT_URL;

    private final static String KAKAO_AUTH_URI = "https://kauth.kakao.com";

    private final static String KAKAO_API_URI = "https://kapi.kakao.com";

    

    public String getKakaoLogin() {
        return KAKAO_AUTH_URI + "/oauth/authorize"
                + "?client_id=" + KAKAO_CLIENT_ID
                + "&redirect_uri=" + KAKAO_REDIRECT_URL
                + "&response_type=code";
    }

    public SwithUser getKakaoInfo(String code, String password, String userName, String userProfile, String userAddress, String userIntroduction, String role) throws Exception {
        if (code == null) throw new Exception("API를 불러오지 못했습니다.");

        String accessToken = "";
        String refreshToken="";
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-type", "application/x-www-form-urlencoded");

            MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
            params.add("grant_type", "authorization_code");
            params.add("client_id", KAKAO_CLIENT_ID);
            params.add("client_secret", KAKAO_CLIENT_SECRET);
            params.add("code", code);
            params.add("redirect_uri", KAKAO_REDIRECT_URL);

            RestTemplate restTemplate = new RestTemplate();
            HttpEntity<MultiValueMap<String, String>> httpEntity = new HttpEntity<>(params, headers);

            ResponseEntity<String> response = restTemplate.exchange(
                    KAKAO_AUTH_URI + "/oauth/token",
                    HttpMethod.POST,
                    httpEntity,
                    String.class
            );
            System.out.println("Kakao API Token Response: " + response.getBody());
            JSONParser jsonParser = new JSONParser();
            JSONObject jsonObj = (JSONObject) jsonParser.parse(response.getBody());

            accessToken = (String) jsonObj.get("access_token");
            refreshToken = (String) jsonObj.get("refresh_token");

        } catch (Exception e) {
        	 throw new Exception("카카오 API 호출 실패: " + e.getMessage());
            
        }

        return getUserInfoWithToken(accessToken,password, userName,userProfile,userAddress, userIntroduction,role);
    }

    private SwithUser getUserInfoWithToken(String accessToken, String password, String userName, String userProfile, String userAddress, String userIntroduction, String role) throws Exception {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");

        RestTemplate rt = new RestTemplate();
        HttpEntity<MultiValueMap<String, String>> httpEntity = new HttpEntity<>(headers);
        ResponseEntity<String> response = rt.exchange(
                KAKAO_API_URI + "/v2/user/me",
                HttpMethod.POST,
                httpEntity,
                String.class
        );

        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObj = (JSONObject) jsonParser.parse(response.getBody());
        JSONObject account = (JSONObject) jsonObj.get("kakao_account");
        JSONObject profile = (JSONObject) account.get("profile");

        Object userNOObject = jsonObj.get("userNO");
        long userNO = userNOObject != null ? ((Number) userNOObject).longValue() : 0;
        String email = String.valueOf(account.get("email"));
        String nickname = String.valueOf(profile.get("nickname"));

   
        
        
        
        
        
        return SwithUser.builder()
                .userNO(userNO)
                .email(email)
                .password(password)
                .userName(userName)
                .nickname(nickname)
                .userProfile(userProfile)
                .userAddress(userAddress) 
                .userIntroduction(userIntroduction)
                .role(role)
                .build();
    }

    public SwithUser signUpUser(SwithUser swithUser)  {
    	SwithUser user = new SwithUser();
    	user.setEmail(swithUser.getEmail());
		user.setPassword(swithUser.getPassword());
		user.setUserName(swithUser.getUserName());
		user.setNickname(swithUser.getNickname());
		user.setUserProfile(swithUser.getUserProfile());
		user.setUserAddress(swithUser.getUserAddress());
		user.setUserIntroduction(swithUser.getUserIntroduction());
		user.setRole(swithUser.getRole());
		
		usersMapper.insertUser(swithUser);
		return user;
		
    }
    
    
}
*/