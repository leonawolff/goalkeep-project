package com.leonawolff.goalkeep.services.interfaces;

import com.leonawolff.goalkeep.models.Goal;
import java.util.List;
import java.util.Optional;

public interface GoalService {
    Goal saveGoal(Goal goal);
    Optional<Goal> getGoalById(Long id);
    List<Goal> getGoalsByUserId(Long userId);
    List<Goal> getAllGoals();
    void deleteGoal(Long id);
}
