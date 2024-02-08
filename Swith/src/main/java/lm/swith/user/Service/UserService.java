package lm.swith.user.Service;

import java.sql.Blob;
import java.util.List;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import lm.swith.user.mapper.UsersMapper;
import lm.swith.user.model.SwithUser;
import lombok.extern.slf4j.Slf4j;
@Slf4j
@Service
public class UserService {
	@Autowired
	private UsersMapper usersMapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder; //encoding password
    

	public SwithUser signUpUser(SwithUser swithUser) { //save the register user  
		SwithUser user = new SwithUser();
		
		user.setEmail(swithUser.getEmail());
		user.setPassword(passwordEncoder.encode(swithUser.getPassword()));
		user.setUsername(swithUser.getUsername());
		user.setNickname(swithUser.getNickname());
		user.setUser_profile(swithUser.getUser_profile());
		user.setUseraddress(swithUser.getUseraddress());
		user.setUser_introduction(swithUser.getUser_introduction());
		user.setRole(swithUser.getRole());
		
		usersMapper.insertUser(user);
		return user;
	}
	//login
	public SwithUser login(String email, String password) {
		return usersMapper.findByEmailAndPassword(email, password);
	}
	//find role
	public SwithUser findUserRole(String role) {
		return usersMapper.findUserRole(role);
	}
	public List<SwithUser> findUsersAll(){
		return usersMapper.findUsersAll();
	}
	
	//validation before publishing token
	public SwithUser getByCredentials(final String email, final String password) {
		return usersMapper.findByEmailAndPassword(email, password);
	}


	public SwithUser getByCredentials(final String email, final String password, final PasswordEncoder encoder) {
		final SwithUser originalUser = usersMapper.findByEmail(email);
		// matches 메서드를 이용해 패스워드가 같은지 확인
		if (originalUser != null && encoder.matches(password, originalUser.getPassword())) {
	        return originalUser;
	    }
		return null;
	}
	
	public SwithUser getUserByEmail(String email) {
        return usersMapper.findByEmail(email);
    }
	//원정연 파트 (update)

      
    public void updateUser(SwithUser swithUser) {
        	usersMapper.updateUser(swithUser);
    }
  
   

}
