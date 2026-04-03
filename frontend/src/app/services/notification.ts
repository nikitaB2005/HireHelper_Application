import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  // Correct backend path verified in backend/backend/urls.py
  private readonly baseUrl = 'http://127.0.0.1:8000/api/notifications/';
  private http = inject(HttpClient);

  getNotifications() {
    return this.http.get(this.baseUrl);
  }

  deleteNotification(notificationId: number) {
    // backend endpoint: api/notifications/<int:pk>/
    return this.http.delete(`${this.baseUrl}${notificationId}/`);
  }
}
