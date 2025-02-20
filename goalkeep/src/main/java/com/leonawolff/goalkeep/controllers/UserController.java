package com.leonawolff.goalkeep.controllers;

import com.leonawolff.goalkeep.models.Goal;
import com.leonawolff.goalkeep.models.User;
import com.leonawolff.goalkeep.services.interfaces.GoalService;
import com.leonawolff.goalkeep.services.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final GoalService goalService;  // Inject GoalService

    @Autowired
    public UserController(UserService userService, GoalService goalService) {
        this.userService = userService;
        this.goalService = goalService;
    }

    // Create a new user
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }

    // Get all users //("/users")
    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getAllUsers();
        if (users.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(users);
    }

    // Get a specific user by ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return userService.getUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Get all goals associated with a specific user
    @GetMapping("/{userId}/goals")
    public ResponseEntity<List<Goal>> getGoalsByUser(@PathVariable Long userId) {
        List<Goal> goals = goalService.getGoalsByUserId(userId);
        if (goals.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(goals);
    }

    // Update an existing user - new

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        User updatedUser = userService.updateUser(id, user);
        return ResponseEntity.ok(updatedUser);
    }

        // Update an existing user - prev 
        // @PutMapping("/{id}")
        // public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        //     Optional<User> existingUser = userService.getUserById(id);
        //     if (existingUser.isPresent()) {
        //         User user = existingUser.get();
        //         user.setUsername(updatedUser.getUsername());
        //         user.setEmail(updatedUser.getEmail());
        //         user.setPassword(updatedUser.getPassword());  // Consider pre save encryption
        //         userService.saveUser(user);
        //         return ResponseEntity.ok(user);
        //     }
        //     return ResponseEntity.notFound().build();
        // }

        // Delete a user
        @DeleteMapping("/{id}")
        public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
            Optional<User> existingUser = userService.getUserById(id);
            if (existingUser.isPresent()) {
                userService.deleteUser(id);
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.notFound().build();
        }
}
