import { Component } from '@angular/core';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzPageHeaderModule, NzBreadCrumbModule, NzIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  onBack(): void {
    console.log('onBack');
  }
}
