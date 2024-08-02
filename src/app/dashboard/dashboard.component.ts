import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DeliveriesByNeighborhoodComponent } from '../deliveries/deliveries-by-neighborhood/deliveries-by-neighborhood.component';
import { DeliveriesInProgressComponent } from '../deliveries/deliveries-in-progress/deliveries-in-progress.component';
import { UnsucessfulDeliveriesComponent } from '../deliveries/unsucessful-deliveries/unsucessful-deliveries.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule,
    DeliveriesByNeighborhoodComponent,
    DeliveriesInProgressComponent,
    UnsucessfulDeliveriesComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
