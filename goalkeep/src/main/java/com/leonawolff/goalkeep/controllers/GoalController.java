package com.leonawolff.goalkeep.controllers;

import com.leonawolff.goalkeep.models.Goal;
import com.leonawolff.goalkeep.services.interfaces.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/goals")
public class GoalController {

    private final GoalService goalService;

    @Autowired
    public GoalController(GoalService goalService) {
        this.goalService = goalService;
    }

    // Create a new goal
    @PostMapping
    public ResponseEntity<Goal> createGoal(@RequestBody Goal goal) {
        Goal createdGoal = goalService.saveGoal(goal);
        return ResponseEntity.ok(createdGoal);
    }

    // Get a goal by ID
    @GetMapping("/{id}")
    public ResponseEntity<Goal> getGoalById(@PathVariable Long id) {
        Optional<Goal> goal = goalService.getGoalById(id);
        return goal.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // Get all goals
    @GetMapping
    public List<Goal> getAllGoals() {
        return goalService.getAllGoals();
    }

    // Get all goals for a specific user
    @GetMapping("/user/{userId}")
    public List<Goal> getGoalsByUser(@PathVariable Long userId) {
        return goalService.getGoalsByUserId(userId);
    }

    // Delete a goal by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGoal(@PathVariable Long id) {
        goalService.deleteGoal(id);
        return ResponseEntity.noContent().build();
    }

    // Update an existing goal
    @PutMapping("/{goalId}")
    public ResponseEntity<Goal> updateGoal(@PathVariable Long goalId, @RequestBody Goal updatedGoal) {
        Optional<Goal> existingGoal = goalService.getGoalById(goalId);
        if (existingGoal.isPresent()) {
            Goal goal = existingGoal.get();
            goal.setTitle(updatedGoal.getTitle());
            goal.setDescription(updatedGoal.getDescription());
            goal.setDueDate(updatedGoal.getDueDate());
            goalService.saveGoal(goal);
            return ResponseEntity.ok(goal);
        }
        return ResponseEntity.notFound().build();
    }

}
