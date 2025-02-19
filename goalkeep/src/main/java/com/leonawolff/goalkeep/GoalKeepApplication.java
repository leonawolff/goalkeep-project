// package com.leonawolff.goalkeep;

// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication
// public class GoalKeepApplication {

// 	public static void main(String[] args) {
// 		SpringApplication.run(GoalKeepApplication.class, args);
// 	}

// }


package com.leonawolff.goalkeep;

import com.leonawolff.goalkeep.models.User;
import com.leonawolff.goalkeep.models.Goal;
import com.leonawolff.goalkeep.repositories.UserRepository;
import com.leonawolff.goalkeep.repositories.GoalRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.time.LocalDate;

@SpringBootApplication
public class GoalKeepApplication {

    public static void main(String[] args) {
        SpringApplication.run(GoalKeepApplication.class, args);
    }

    // @Bean
    // public CommandLineRunner testRepositories(UserRepository userRepository, GoalRepository goalRepository) {
    //     return args -> {
    //         // Create and save a test user
    //         User user = new User("testuser", "password123", "test@example.com");
    //         userRepository.save(user);
    //         System.out.println("✅ User saved: " + user.getUsername());

    //         // Fetch user from database
    //         User fetchedUser = userRepository.findByUsername("testuser").orElse(null);
    //         if (fetchedUser != null) {
    //             System.out.println("✅ User retrieved: " + fetchedUser.getUsername());

    //             // Create and save a test goal for this user
    //             Goal goal = new Goal("Learn Spring Boot", "Build a project using Spring Boot", LocalDate.of(2025, 3, 1), fetchedUser);
    //             goalRepository.save(goal);
    //             System.out.println("✅ Goal saved: " + goal.getTitle());

    //             // Fetch all goals for this user
    //             System.out.println("✅ User's Goals: " + goalRepository.findByUserId(fetchedUser.getId()).size());
    //         } else {
    //             System.out.println("❌ User retrieval failed!");
    //         }
    //     };
    // }
}