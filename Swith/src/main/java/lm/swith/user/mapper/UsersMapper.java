package lm.swith.user.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.UpdateProvider;

import lm.swith.user.model.GithubUser;
import lm.swith.user.model.SwithUser;

@Mapper
public interface UsersMapper {
    void insertUser(SwithUser swithUser);
    
    void insertUser(GithubUser githubUser);
    
    SwithUser findUserRole(String role);
    
    List<SwithUser> findUsersAll();
    
    SwithUser findByEmail(String email);

    SwithUser findByEmailAndPassword(String email, String password);
    
    SwithUser getUserByEmail(String email);
    
    
    
    SwithUser updateUser(SwithUser swithUser);

	static void save(SwithUser user) {
		
	
	}
	   
}
