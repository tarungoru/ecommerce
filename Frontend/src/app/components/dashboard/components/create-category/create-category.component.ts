import { Component } from '@angular/core';
import { CommonDashboardService } from '../../common-dashboard.service';
import { NotificationService } from '../../../../notification.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css'
})
export class CreateCategoryComponent {

  category:string = '';

  constructor(private commonService:CommonDashboardService, private notificationService:NotificationService) {}

  createCategory() {
    if (this.category == '') return;
    this.commonService.createCategory(this.category).subscribe({
      next: (response: any) => {
        this.notificationService.showSuccess(
          `${this.category} created successfully`
        );

        this.category = '';
      },
      error: (error:any) => {
        console.error(error);
        let errorMessage = 'Something went wrong';
        
        if (error.error?.message) {
          errorMessage = error.error.message;
        }
        this.notificationService.showError(errorMessage);
      }
    });
  }
}
