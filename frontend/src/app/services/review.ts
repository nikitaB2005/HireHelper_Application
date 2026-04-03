import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  // Reviews are handled by the tasks app in backend/tasks/urls.py
  private readonly baseUrl = 'http://127.0.0.1:8000/api/tasks/';
  private http = inject(HttpClient);

  submitReview(taskId: number, rating: number, comment: string) {
    const payload = {
      task_id: taskId,
      rating: rating,
      comment: comment
    };
    // backend endpoint: api/tasks/review/<int:task_id>/
    return this.http.post(`${this.baseUrl}review/${taskId}/`, payload);
  }

  getReviews(userId: number) {
    // backend endpoint: api/tasks/user-reviews/<int:user_id>/
    return this.http.get(`${this.baseUrl}user-reviews/${userId}/`);
  }
}
