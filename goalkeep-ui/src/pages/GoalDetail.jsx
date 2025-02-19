import { useParams } from "react-router-dom";

export default function GoalDetail() {
  const { id } = useParams(); // Get the goal ID from the URL

  return (
    <div>
      <h1>Goal Detail Page</h1>
      <p>Managing Goal ID: {id}</p>
    </div>
  );
}
