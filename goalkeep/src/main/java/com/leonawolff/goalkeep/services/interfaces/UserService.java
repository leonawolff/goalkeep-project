package com.leonawolff.goalkeep.services.interfaces;

import com.leonawolff.goalkeep.models.User;
import java.util.List;
import java.util.Optional;

public interface UserService {
    User saveUser(User user);
    Optional<User> getUserById(Long id);
    Optional<User> getUserByUsername(String username);
    List<User> getAllUsers();
    void deleteUser(Long id);
    User updateUser(Long id, User user);
}
