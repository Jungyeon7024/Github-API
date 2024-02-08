package lm.swith.user.Service;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import lm.swith.user.mapper.UsersMapper;
import lm.swith.user.model.GithubUser;
import lm.swith.user.model.SwithUser;

@Configuration
class AppConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}

@Service
public class GithubUserService {

    private final UsersMapper usersMapper;
    private final RestTemplate restTemplate;

    @Value("${github.client.id}")
    private String GITHUB_CLIENT_ID;

    @Value("${github.client.secret}")
    private String GITHUB_CLIENT_SECRET;

    @Value("${github.redirect.url}")
    private String GITHUB_REDIRECT_URL;

    private final static String GITHUB_AUTH_URI = "https://github.com/login/oauth/authorize";
    private final static String GITHUB_API_URI = "https://api.github.com/user";

    public GithubUserService(UsersMapper usersMapper, RestTemplate restTemplate) {
        this.usersMapper = usersMapper;
        this.restTemplate = restTemplate;
    }

    public String getGithubLogin() {
        return GITHUB_AUTH_URI
                + "?client_id=" + GITHUB_CLIENT_ID
                + "&redirect_uri=" + GITHUB_REDIRECT_URL
                + "&response_type=code";
    }

    public GithubUser getGithubInfo(String code, String username) throws Exception {
        if (code == null) {
            throw new Exception("API를 불러오지 못했습니다.");
        }

        String accessToken = getAccessToken(code);

        return getUserInfoWithToken(accessToken, username);
    }

    private String getAccessToken(String code) throws Exception {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.add("Accept", "application/json");

            MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
            params.add("grant_type", "authorization_code");
            params.add("client_id", GITHUB_CLIENT_ID);
            params.add("client_secret", GITHUB_CLIENT_SECRET);
            params.add("code", code);
            params.add("redirect_uri", GITHUB_REDIRECT_URL);

            HttpEntity<MultiValueMap<String, String>> httpEntity = new HttpEntity<>(params, headers);

            ResponseEntity<String> response = restTemplate.exchange(
                    "https://github.com/login/oauth/access_token",
                    HttpMethod.POST,
                    httpEntity,
                    String.class
            );

            JSONParser jsonParser = new JSONParser();
            JSONObject jsonObj = (JSONObject) jsonParser.parse(response.getBody());

            return (String) jsonObj.get("access_token");
        } catch (Exception e) {
            throw new Exception("액세스 토큰을 가져오지 못했습니다.");
        }
    }

    private GithubUser getUserInfoWithToken(String accessToken, String username) throws Exception {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);
        headers.add("Accept", "application/json");

        HttpEntity<String> httpEntity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                GITHUB_API_URI,
                HttpMethod.GET,
                httpEntity,
                String.class
        );

        JSONParser jsonParser = new JSONParser();
        JSONObject jsonObj = (JSONObject) jsonParser.parse(response.getBody());

        String nickname = (String) jsonObj.get("login");

        return GithubUser.builder()
                .nickname(nickname)
                .username(username)
                .build();
    }

    public SwithUser registerUser(SwithUser swithUser) {
        SwithUser user = new SwithUser();
        user.setNickname(swithUser.getNickname());
        user.setUsername(swithUser.getUsername());

        usersMapper.insertUser(swithUser);
        return user;
    }
}

